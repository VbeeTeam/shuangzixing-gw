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
		padding-top: 0.9rem;
		box-sizing: border-box;
		background-color: #EFF0F5;
		.section{
			width: 80%;
			margin: 0.4rem auto 0.2rem;
			overflow: hidden;
			.section-left{
				float: left;
				width: 70%;
				
				.strategy{
					.strategy-list{
						background-color: #fff;
						margin-top: 0.2rem;
						.strategy-nav{
							padding: 0.05rem 0;
							position: relative;
							.nav-top{
								span{
								display: inline-block;
								width: 19.5%;
								font-size:0.14rem;
								text-align: center;
								font-family:PingFang-SC-Regular,PingFang-SC;
								font-weight:400;
								color:rgba(102,102,102,1);
								line-height:0.2rem;
								border-right: 1px solid #DCDFE6;
								cursor: pointer;
									&:last-of-type{
										border: none;
									}
								}
								img{
									width: 0.14rem;
									height: 0.14rem;
									vertical-align: middle;
									margin-left: 0.05rem;
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
								padding: 0.2rem 0;
								box-shadow:0px 12px 10px 0px rgba(0,0,0,0.3);
								span{
									display: inline-block;
									font-size:0.14rem;
									text-align: center;
									font-family:PingFang-SC-Regular,PingFang-SC;
									font-weight:400;
									color:rgba(102,102,102,1);
									line-height:0.2rem;
									margin-left: 0.4rem;
									cursor: pointer;
								}
							}
							.allNav{
								visibility: visible;
								top:0.3rem;
							}

							.active{
								font-weight:bold !important;
								color:rgba(1,109,248,1) !important;
							}
						}
						.list{
							overflow: hidden;
							li{
								padding: 0.1rem;
								overflow: hidden;
								border-bottom: 1px dashed #016DF8;
								&:last-of-type{
									border: none;
								}
								.list-left{ 
									float: left;
									width: 70%;
									height: 2rem;
									padding: 0.2rem;
									box-sizing: border-box;
									h3{
										font-size:0.18rem;
										font-family:PingFang-SC-Bold,PingFang-SC;
										font-weight:bold;
										color:rgba(0,0,0,0.85);
										line-height:0.25rem;
									}
									p{
										font-size:0.16rem;
										font-family:PingFang-SC-Medium,PingFang-SC;
										font-weight:500;
										color:rgba(102,102,102,1);
										line-height:0.22rem;
										margin: 0.2rem 0 0.5rem;
									}
									ul{
										li{
											width: 60%;
											padding: 0;
											font-size:0.14rem;
											font-family:PingFang-SC-Medium,PingFang-SC;
											font-weight:500;
											color:rgba(102,102,102,1);
											line-height:0.2rem;
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
									height: 2rem;
									position: relative;
									p{
										font-size:0.18rem;
										font-family:PingFang-SC-Bold,PingFang-SC;
										font-weight:bold;
										color:rgba(254,160,58,1);
										line-height:0.25rem;
										text-align: right;
										padding-right: 0.1rem;
										b{
											font-size: 0.3rem;
										}
									}
									.btn{
										width: 90%;
										position: absolute;
										right: 0.2rem;
										bottom: 0.1rem;
										button{
											display: inline-block;
											width: 0.88rem;
											font-size:0.14rem;
											font-family:PingFang-SC-Bold,PingFang-SC;
											font-weight:bold;
											color:rgba(1,109,248,1);
											line-height:0.2rem;
											border:1px solid rgba(1,109,248,1);
											padding: 0.05rem 0.15rem;
											border-radius: 0.25rem;
											background-color: #fff;
											margin-left: 0.4rem;
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
					font-size:0.14rem;
					text-align: center;
					font-family:PingFang-SC-Medium,PingFang-SC;
					font-weight:500;
					color:rgba(255,255,255,1);
					line-height:0.2rem;
					padding: 0.2rem 0;
					box-sizing: border-box;
					background-color: #97C3FC;
				}
			}
			.section-right{
				float: right;
				width: 23%;
				margin-top: 0.6rem;
				img{
					display: block;
				}
			}
		}
	}

</style>
