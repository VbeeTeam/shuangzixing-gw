<template>
	<div class="product">
		<!-- banner -->
		<div class="banner">
			<img src="../assets/img/组3.png" alt="">
		</div>

		<!-- section -->
		<div class="section">
			<div class="section-left">
				<div class="strategy">
					<div class="strategy-list">
						<div class="strategy-nav">
							<div class="nav-top">
								<span v-for="(item,index1) in navList" :key="index1"
								:class="{'active':liIndex == index1}" @click="changeNav(1,item,index1)">{{item}}险</span>
								<span @click="allNav()">更多<img v-if="allBoolean" src="../assets/img/icon-arrowdown.png" alt=""><img v-else src="../assets/img/icon-arrowup.png" alt=""></span>
							</div>
							<div class="nav-bottom" :class="{ 'allNav' : !allBoolean }">
								<span v-for="(item,index4) in navList2" :key="index4"
								:class="{'active':liIndex2 == index4}" @click="changeNav(2,item,index4)">{{item}}险</span>
							</div>

						</div>
						<ul class="list">
							<li v-for="(item,index2) in lists" :key="index2">
								<div class="list-left" :style="{background:'url('+ item.coverUrl +') no-repeat center top',backgroundSize:'cover'}">
									<h3>{{item.name}}</h3>
									<p>{{item.intro}}</p>
									<ul>
										<li v-for="(item2,index3) in item.insureProductItems" :key="index3">
											{{item2.itemName}}：{{item2.content}}
										</li>
									</ul>
								</div>
								<div class="list-right">
									<p>￥<b>{{item.lowPrice}}</b></p>
									<div class="btn">
										<button v-if="item.articleList[0].coverUrl"><a :href="item.articleList[0].coverUrl"><span>测评文章</span></a></button>
										<button v-else style="border: none;"></button>
										<button @click="toProductDetail(item.id)">查看详情</button>
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
				<!-- <img src="../assets/img/扫描二维码.png" alt=""> -->
			</div>
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src
	import {
		productType
	} from '@/api/api';
	import {
		listByTypeClient
	} from '@/api/api';
	export default {
		name: 'product',
		components: {

		},
		data() {
			return {
				navList:[],
				navList2:[],
				allBoolean:true,
				lists:[],
				liIndex:0,
				liIndex2:null,
				type:null,
				page:0,
				size:10,
				totalNum:null,
			}
		},
		methods: {
			onLoad(){
				//产品类型
				productType({}).then(res => {
					this.type = res[0]
					this.navList = res.splice(0,4)
					this.navList2 = res.splice(0,res.length)
					
					this.getList()
				})
				
			},
			//产品列表
			getList() {
				var obj = {
					page: this.page,
					size: this.size,
					type: this.type
				}
				listByTypeClient(obj).then(res => {
					this.totalNum = res.totalElements
					if(this.totalNum > this.lists.length){
						res.content.forEach((item) => {
							if (JSON.parse(item.articleList).length > 0) {
								item.articleList = JSON.parse(item.articleList)
							}
							item.insureProductItems = item.insureProductItems.splice(0,2)
							
						})

						const oldList = this.lists
						this.lists = oldList.concat(res.content)
						
						
					}
				})
			},
			//切换产品类型
			changeNav(a,type,index){
				if(a == 1){
					this.liIndex = index
					this.liIndex2 = -1
				}else{
					this.liIndex2 = index
					this.liIndex = -1
				}
				
				this.type = type
				this.totalNum = null
				this.lists = []
				this.page = 0
				this.getList()
			},
			//更多类型
			allNav(){

				this.allBoolean = !this.allBoolean

			},
			//查看更多
			lookAll(){
				if(this.totalNum > this.lists.length){
					this.page = this.page + 1
					this.getList()
				}else{
					this.$toast({
						text: '没有更多了',
						type: 'info',
						duration: 1000
					})
				}
			},
			//跳转产品详情
			toProductDetail(id){
				this.$router.push({
					path:'/productDetail',
					query:{
						id:id,
						title:"产品精选",
						subtitle: this.allBoolean ? this.navList[this.liIndex] : this.navList2[this.liIndex2]
					}
				})
			}
		},
		created() {
			this.$store.state.pageType = 3
			this.$store.commit('mutationsChange', 3);

			this.onLoad()
		},

	}
</script>


<style lang="scss" scoped>
	.product{
		padding-top: 90px;
		box-sizing: border-box;
		background-color: #EFF0F5;
		min-width: 1200px;
		.section{
			width: 80%;
			margin: 40px auto 20px;
			overflow: hidden;
			.section-left{
				float: left;
				width: 70%;
				
				.strategy{
					min-width: 700px;
					.strategy-list{
						background-color: #fff;
						margin-top: 20px;
						.strategy-nav{
							padding: 5px 0;
							position: relative;
							.nav-top{
								span{
								display: inline-block;
								width: 19.5%;
								font-size:14px;
								text-align: center;
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
								img{
									width: 14px;
									height: 14px;
									vertical-align: middle;
									margin-left: 5px;
								}
							}
							
							.nav-bottom{
								width: 100%;
								position: absolute;
								left: 0;
								top: 0;
								visibility: hidden;
								transition: 0.4s;
								z-index: 1;
								background-color: #fff;
								padding: 20px 0;
								box-shadow:0px 12px 10px 0px rgba(0,0,0,0.3);
								span{
									display: inline-block;
									font-size:14px;
									text-align: center;
									font-family:PingFang-SC-Regular,PingFang-SC;
									font-weight:400;
									color:rgba(102,102,102,1);
									line-height:20px;
									margin-left: 40px;
									cursor: pointer;
								}
							}
							.allNav{
								visibility: visible;
								top:30px;
							}

							.active{
								font-weight:bold !important;
								color:rgba(1,109,248,1) !important;
							}
						}
						.list{
							overflow: hidden;
							li{
								padding: 10px;
								overflow: hidden;
								border-bottom: 1px dashed #016DF8;
								&:last-of-type{
									border: none;
								}
								.list-left{ 
									float: left;
									width: 70%;
									height: 220px;
									padding: 20px;
									box-sizing: border-box;
									h3{
										font-size:18px;
										font-family:PingFang-SC-Bold,PingFang-SC;
										font-weight:bold;
										color:rgba(0,0,0,0.85);
										line-height:25px;
									}
									p{
										font-size:16px;
										font-family:PingFang-SC-Medium,PingFang-SC;
										font-weight:500;
										color:rgba(102,102,102,1);
										line-height:22px;
										margin: 20px 0 50px;
									}
									ul{
										li{
											width: 60%;
											padding: 0;
											font-size:14px;
											font-family:PingFang-SC-Medium,PingFang-SC;
											font-weight:500;
											color:rgba(102,102,102,1);
											line-height:20px;
											border: none;
											list-style: inside;
											overflow: hidden;
											text-overflow:ellipsis;
											white-space: nowrap;
										}
										li::before {  
											color: #016DF8;
										}
									}
								}
								.list-right{
									float: left;
									width: 30%;
									height: 200px;
									position: relative;
									p{
										font-size:18px;
										font-family:PingFang-SC-Bold,PingFang-SC;
										font-weight:bold;
										color:rgba(254,160,58,1);
										line-height:25px;
										text-align: right;
										padding-right: 10px;
										b{
											font-size: 30px;
											
										}
									}
									.btn{
										width: 90%;
										position: absolute;
										right: 20px;
										bottom: 10px;
										button{
											display: inline-block;
											width: 88px;
											font-size:14px;
											font-family:PingFang-SC-Bold,PingFang-SC;
											font-weight:bold;
											color:rgba(1,109,248,1);
											line-height:20px;
											border:1px solid rgba(1,109,248,1);
											padding: 5px 15px;
											border-radius: 25px;
											background-color: #fff;
											margin-left: 40px;
											a{
												color:rgba(1,109,248,1);
											}
											&:last-of-type{
												background-color: #016DF8;
												color: #fff;
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
					text-align: center;
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
				margin-top: 60px;
				img{
					display: block;
				}
			}
		}
	}

</style>
