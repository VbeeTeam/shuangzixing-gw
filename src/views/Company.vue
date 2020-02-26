<template>
	<div class="company">
		<!-- banner -->
		<div class="banner">
			<img src="../assets/img/bannner-2.png" alt="">
		</div>

		<!-- section -->
		<div class="section">
			<div class="section-information">
				<div class="information-top">
					<h3>公司简介</h3>
					<p>宁波星池信息技术有限公司是一家新型的互联网科技公司，以保险配置方案咨询、建议以及免费保险知识学习为主体内容，凭借差异化的定位、专业的运营机制、以及基于大数据处理的智能化管理，为用户打造全新的投保体验，提供一站式的保险服务。</p>
					<p>公司坐落于长三角南翼经济节点城市-宁波。良好的地理位置、人性化的商务设置、时尚优雅的办公环境为公司提供了优越的物质条件，优秀的保险团队则是公司的精神源泉和发展基石。公司创始成员及高层管理人员均有丰富从业经验。团队中的咨询师有着保险相关专业学历，人均从业经验5年，具备极强的保险专业能力。</p>
					<p>深耕于“互联网+保险”的模式，宁波星池信息技术有限公司不断优化和丰富平台服务，致力于将自身打造成为中国一流的保险咨询测评及保险决策服务平台！</p>
				</div>
				<div class="information">
					<img src="../assets/img/信任.png" alt="">
					<div>
						<h3>团队理念</h3>
						<p>公司的使命是聚焦客户关注，提供科学智慧的保险决策方案，持续为客户创造最大价值，为社会保障创造贡献、新增推动力，打造中国一流保险咨询测评及保险决策服务平台！</p>
						<p>基于这个使命，公司致力于打造一支具备高度团队协作能力、能快速适应环境且能独立敏捷思考、高素质、年轻化、专业化、有梦想的精英团队，以“科学、严谨、高效”为工作理念，为实现公司的战略目标奠定文化基础。</p>
					</div>
				</div>
				<div class="information infor-two">
					<div>
						<h3>未来展望</h3>
						<p>我们有最专业的保险规划师，可以通过用户提供的有效信息，进行大数据智能分析。针对用户自身条件与需求，由专业老师科学规划，提供最适合的专业配置建议。目前公司主营业务在微信平台开展，您可以在公众号搜索「 爱星保」找到您的专属保险规划师进行个人保险方案定制。</p>
					</div>
					<img src="../assets/img/互利.png" alt="">
				</div>
			</div>

			<div class="section-team">
				<h3>专业团队</h3>
				<div class="team">
					<div>
						<img src="../assets/img/运营.png" alt="">
						<b>运营团队</b>
					</div>
					<div>
						<img src="../assets/img/销售.png" alt="">
						<b>销售团队</b>
					</div>
					<div>
						<img src="../assets/img/开发.png" alt="">
						<b>开发团队</b>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: 'company',
		components: {

		},
		data(){
			return{
				
			}
		
		},
		created() {
			this.$store.state.pageType = 2
			this.$store.commit('mutationsChange', 2);
		},
	}
</script>

<style lang="scss" scoped>
	.company{
		padding-top: 0.8rem;
		box-sizing: border-box;
		background-color: #F7FBFF;
		
		.section{
			
			.section-information{
				width: 65%;
				margin: 0.2rem auto 0;
				.information-top{
					margin-bottom: 0.6rem;
					h3{
						font-size: 0.26rem;
						font-family:PingFang-SC-Bold,PingFang-SC;
						font-weight:bold;
						color:rgba(0,0,0,1);
						line-height:42px;
						text-align: center;
						margin-bottom: 0.3rem;
					}
					p{
						text-indent: 0.32rem;
						font-size:0.2rem;
						font-family:PingFang-SC-Regular,PingFang-SC;
						font-weight:400;
						color:rgba(0,0,0,1);
						line-height:0.4rem;
					}
				}
				.information{
					overflow: hidden;
					margin-bottom: 0.8rem;
					img{
						float: left;
						width: 50%;
					}
					div{
						float: left;
						width: 50%;
						padding-left: 0.8rem;
						box-sizing: border-box;
						text-align: left;
						h3{
							font-size:0.3rem;
							font-family:PingFang-SC-Regular,PingFang-SC;
							font-weight:400;
							color:rgba(0,0,0,1);
							line-height:0.42rem;
							box-sizing: border-box;
							margin-bottom: 0.2rem;
						}
						p{
							font-size:0.18rem;
							font-family:PingFang-SC-Regular,PingFang-SC;
							font-weight:400;
							color:rgba(0,0,0,1);
							line-height:0.32rem;
							text-indent: 0.36rem;
						}
					}

				}
				
				.infor-two{
					div{
						padding-left: 0;
						padding-right: 0.8rem;
						h3{
							text-align: right;
							margin-bottom: 0.5rem;
						}
					}
				}

			}

			.section-team{
				width: 90%;
				margin: 0 auto;
				h3{
					font-size:0.3rem;
					font-family:PingFang-SC-Regular,PingFang-SC;
					font-weight:400;
					color:rgba(0,0,0,1);
					line-height:0.42rem;
					text-align: center;
				}
				.team{
					padding: 0.6rem 0;
					box-sizing: border-box;
					overflow: hidden;
					div{
						width: 30%;
						float: left;
						position: relative;
						margin-right: 5%;
						&:last-of-type{
							margin: 0;
						}
						b{
							position: absolute;
							left: 50%;
							top:50%;
							transform: translate(-50%,-50%);
							font-size:0.3rem;
							font-family:PingFang-SC-Bold,PingFang-SC;
							font-weight:bold;
							color:rgba(255,255,255,1);
							line-height:0.42rem;
						}
					}
				}
			}

		}
	}
		
	
</style>
