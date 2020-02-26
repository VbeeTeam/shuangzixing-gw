<template>
	<div class="home">
		<!-- banner -->
		<div class="banner">
			<img src="../assets/img/bannner.png" alt="">
		</div>
		
		<!-- section -->
		<div class="section">
			<div class="section-nav">
				<h3>产品服务</h3>
				<ul>
					<li>
						<img src="../assets/img/爱心.png" alt="">
						<h6>专属客服</h6>
						<p>智能匹配系统及优质的服务，对客户进行分类并由专属客服一对一服务，保证沟通零距离，能够更优质更快速的服务客户。</p>
					</li>
					<li>
						<img src="../assets/img/方案.png" alt="">
						<h6>方案配置</h6>
						<p>通过平台提供的大数据智能分析，给客户专业的配置建议，利用互联网便捷、简易的优势，完全自主的配置保险方案。</p>
					</li>
					<li>
						<img src="../assets/img/测评.png" alt="">
						<h6>精准测评</h6>
						<p>将各类别产品进行大数据分析，对每款产品进行独立评测，能够精准分析产品优劣势，根据客户需求进行精准产品定位。</p>
					</li>
					<li>
						<img src="../assets/img/团队.png" alt="">
						<h6>资深团队</h6>
						<p>公司拥有保险行业内最资深的保险从业团队，行业导师均从业5年以上，具有完备的保险知识库供客户自主学习参考。</p>
					</li>
				</ul>
			</div>
			<div class="section-img">
				<img src="../assets/img/pic-1.png" alt="">
			</div>
			<div class="section-img">
				<img src="../assets/img/pic-2.png" alt="">
			</div>
			<div class="section-img">
				<img src="../assets/img/pic-3.png" alt="">
			</div>
		</div>

	</div>
</template>

<script>
	
	export default {
		name: 'home',
		components: {

		},
		data() {
			return {
				
			}
		},
		created() {
			//头部划过效果公共变量
			this.$store.state.pageType = 1
			this.$store.commit('mutationsChange', 1);

		},
		mounted() {
			
		},
		destroyed() {
			
		},
		methods: {
			
		}

	}
</script>

<style lang="scss" scoped>
	.home{
		padding-top: 0.8rem;
		box-sizing: border-box;
		background-color: #F7FBFF;
		.section{
			width: 80%;
			margin: 0.4rem auto 0;
			padding-bottom: 0.4rem;
			.section-nav{
				overflow: hidden;
				h3{
					text-align: center;
					font-size: 0.3rem;
					font-family:PingFang-SC-Bold,PingFang-SC;
					font-weight:bold;
					color:rgba(0,0,0,1);
					line-height: 0.42rem;
				}
				ul{
					overflow: hidden;
					padding: 0.4rem 0 1rem;
					box-sizing: border-box;
					li{
						width: 20%;
						float: left;
						text-align: center;
						background:rgba(255,255,255,1);
						padding: 0.2rem;
						box-shadow:0px 12px 20px 0px rgba(1,109,248,0.2);
						border-radius:8px;
						margin-left: 6.6%;
						box-sizing: border-box;
						&:first-of-type{
							margin-left: 0;
						}
						img{
							width: 0.88rem;
						}
						h6{
							font-size:0.18rem;
							font-family:PingFang-SC-Medium,PingFang-SC;
							font-weight:500;
							color:rgba(0,0,0,1);
							line-height:25px;
							margin: 0.1rem 0 0.3rem;
						}
						p{
							font-size:0.14rem;
							font-family:PingFang-SC-Medium,PingFang-SC;
							font-weight:500;
							color:rgba(0,0,0,1);
							line-height:20px;
						}
					}
				}
			}
			.section-img{
				overflow: hidden;
				margin-bottom: 10px;
				img{
					width: 6.51rem;
					float: right;
				}
				&:nth-of-type(2n){
					img{
						float: left;
					}
				}
				
			}
		}
	}
	

</style>
