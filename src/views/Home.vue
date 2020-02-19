<template>
	<div class="home">
		<!-- banner -->
		<div class="banner">
			<img src="../assets/img/banner.png" alt="">
		</div>
		
		<!-- section -->
		<div class="section">
			<div class="section-left">
				<div class="evaluation">
					<img src="../assets/img/标题-1.png" alt="">
					<ul class="evaluation-img">
						<li v-for="(item,index4) in evaluationList" :key="index4" 
						:style="{background:'url('+ item.picture +') center top',backgroundSize:'cover'}"
						@click="toEvaluation(item.id)">
							<h3>{{item.title}}</h3>
							<p>{{item.subtitle}}</p>
							<div>
								<img src="../assets/img/icon_eye.png" alt="">
								<span>{{item.visits}}</span>
							</div>
						</li>
						
					</ul>
				</div>
				<div class="strategy">
					<img src="../assets/img/标题-2.png" alt="">
					<div class="strategy-list">
						<div class="strategy-nav">
							<span v-for="(item,index1) in navList" :key="index1"
							:class="{'active':liIndex == index1}" @click="changeNav(item.id,index1)">{{item.title}}</span>
						</div>
						<ul class="list">
							<li v-for="(item,index2) in lists" :key="index2" @click="toArticle(item)">
								<img class="img" :src="item.coverUrl" alt="">
								<div class="list-right">
									<h3>{{item.title}}</h3>
									<div class="list-icon">
										<div>
											<img src="../assets/img/icon_comments.png" alt="">
											<span>0</span>
										</div>
										<div>
											<img src="../assets/img/icon_eye备份.png" alt="">
											<span>{{item.visits}}</span>
										</div>
									</div>
								</div>
							</li>
						</ul>

						<div class="lookAll" @click="lookAll()">
							查看更多
						</div>
					</div>
				</div>
			</div>
			<div class="section-right">
				<img src="../assets/img/编组 8备份.png" alt="">
				<img src="../assets/img/扫描二维码.png" alt="">
			</div>
		</div>

	</div>
</template>

<script>
	import {
		apiModule
	} from '@/api/api'; 
	import {
		apiSpecialTopic
	} from '@/api/api';
	import {
		apiWebsite
	} from '@/api/api';

	
	export default {
		name: 'home',
		components: {

		},
		data() {
			return {
				evaluationList:[],
				navList:[],
				lists:[],
				liIndex:0,
				articleId:null,
				page:0,
				size:5,
				totalNum:null,
			}
		},
		created() {
			//头部划过效果公共变量
			this.$store.state.pageType = 1
			this.$store.commit('mutationsChange', 1);

			this.onload()
		},
	
		methods: {
			onload(){          
				apiModule('/api/tModule/1', {}).then(res => {
					
					//专业测评专题
					apiSpecialTopic('/api/specialTopic/app/' + res[0].id, {}).then(res => {
						this.evaluationList = res.splice(0,4)
						
					})
					//六大攻略专题
					apiSpecialTopic('/api/specialTopic/app/' + res[1].id, {}).then(res => {
						this.navList = res
						this.articleId = res[0].id

						this.getList()
					})
					
				})
			},
			//文章列表
			getList(){
				// 六大攻略
				apiWebsite('/api/specialTopic/website/list/' + this.articleId 
				+ '?page=' + this.page + '&size=' + this.size, {}).then(res => {
					this.totalNum = res.length
					if(res.length > 0){
						const oldList = this.lists
						this.lists = oldList.concat(res) 
					}else if(res.length == 0){
						this.$toast({
							text: '没有更多了',
							type: 'info',
							duration: 3000
						})
					}
				})
			},
			//查看更多
			lookAll(){
				if(this.totalNum > 0){
					this.page = this.page + 1
					this.getList()
				}else{
					this.$toast({
						text: '没有更多了',
						type: 'info',
						duration: 3000
					})
				}
			},

			//切换攻略文章
			changeNav(id,index) {
				this.liIndex = index
				this.lists = []
				this.articleId = id
				this.page = 0
				this.totalNum = null
				this.getList()
			},

			//跳转文章详情
			toArticle(a){
				if (a.wechatArticleUrl != "") {
					window.open(a.wechatArticleUrl)
				} else {
					this.$router.push({
						path: '/article',
						query: {
							id: a.id,
							title:"首页",
							subtitle:this.navList[this.liIndex].title
						}
					});
				}

			},
			//跳转专题详情
			toEvaluation(id){
				this.$router.push({
					path:'/evaluation',
					query:{
						id:id,
						title:"首页",
						subtitle:"专业测评"
					}
				})
			}

		}

	}
</script>

<style lang="scss" scoped>
	.home{
		padding-top: 90px;
		box-sizing: border-box;
		background-color: #EFF0F5;
		.section{
			width: 80%;
			margin: 40px auto 20px;
			overflow: hidden;
			.section-left{
				float: left;
				width: 70%;
				.evaluation{
					text-align: center;
					.evaluation-img{
						margin: 21px 0 40px;
						overflow: hidden;
						li{
							position: relative;
							width: 242px;
							height: 142px;
							float: left;
							text-align: left;
							padding: 10px;
							box-sizing: border-box;
							margin-left: 31px;
							&:first-of-type{
								margin-left: 0;
							}
							h3{
								font-size:18px;
								font-family:PingFang-SC-Bold,PingFang-SC;
								font-weight:bold;
								color:rgba(255,255,255,1);
								line-height:25px;
								text-shadow:0px 3px 5px rgba(0,0,0,0.3);
								margin-bottom: 4px;
							}
							p{
								font-size:14px;
								font-family:PingFang-SC-Medium,PingFang-SC;
								font-weight:500;
								color:rgba(255,255,255,1);
								line-height:20px;
							}
							div{
								position: absolute;
								right: 10px;
								bottom: 10px;
								img{
									width: 21px;
									height: 21px;
									vertical-align: middle;
									margin-right: 5px;
								}
								span{
									font-size:14px;
									font-family:DIN-Medium,DIN;
									font-weight:500;
									color:rgba(255,255,255,1);
									line-height:17px;
								}
							}
						}
					}
				}
				.strategy{
					text-align: center;
					.strategy-list{
						background-color: #fff;
						margin-top: 20px;
						.strategy-nav{
							padding: 5px 0;
							span{
								display: inline-block;
								width: 16.5%;
								font-size:14px;
								font-family:PingFang-SC-Regular,PingFang-SC;
								font-weight:400;
								color:rgba(102,102,102,1);
								line-height:20px;
								border-right: 1px solid #DCDFE6;
								cursor: pointer;
								&:last-of-type{
									border: none;
								}
							}
							.active{
								font-weight:bold;
								color:rgba(1,109,248,1);
							}
						}
						.list{
							overflow: hidden;
							text-align: left;
							li{
								padding: 10px;
								overflow: hidden;
								.img{
									width: 135px;
									height: 105px;
									float: left;
								}
								.list-right{
									position: relative;
									width: 80%;
									height: 105px;
									float: left;
									padding: 10px 20px;
									box-sizing: border-box;
									h3{
										font-size:14px;
										font-family:PingFang-SC-Medium,PingFang-SC;
										font-weight:500;
										color:rgba(51,51,51,1);
										line-height:20px;
									}
									.list-icon{
										position: absolute;
										left: 20px;
										bottom: 10px;
										div{
											float: left;
											margin-right: 20px;
											img{
												width: 15px;
												height: 15px;
												margin-right: 2px;
												vertical-align: middle;
											}
											span{
												font-size:12px;
												font-family:DIN-Medium,DIN;
												font-weight:500;
												color:#ccc;
												line-height:15px;
											}
										}
									}
								}
							}
							
						}

					}
				}

				.lookAll{
					width: 100%;
					font-size:14px;
					font-family:PingFang-SC-Medium,PingFang-SC;
					font-weight:500;
					color:rgba(255,255,255,1);
					line-height:20px;
					padding: 20px 0;
					box-sizing: border-box;
					background-color: #97C3FC;
				}
			}
			.section-right{
				float: right;
				width: 23%;
				img{
					display: block;
				}
			}
		}
	}
	

</style>
