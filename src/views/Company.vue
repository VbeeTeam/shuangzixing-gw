<template>
	<div class="company">
		<!-- banner -->
		<div class="banner">
			<img src="../assets/img/bannner-2.png" alt="">
		</div>

		<!-- section -->
		<div class="section">
			<div class="section-information">
				<div class="information">
					<img src="../assets/img/信任.png" alt="">
					<div>
						<h3>信任共筑携手美好未来</h3>
						<p>保险产品繁杂多样，我们深入了解市场上的各类保险产品，为用户提供保险知识和专业测评。中立、客观、专业，是我们不变的初心。</p>
					</div>
				</div>
				<div class="information">
					<div>
						<h3>互利共赢打造和谐生态</h3>
						<p>保险测评师专业解答用户的各类疑问，根据用户实际家庭情况，提供更多的保障建议，帮助用户买对保险，买好保险。</p>
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
		padding-top: 81px;
		box-sizing: border-box;
		background-color: #F7FBFF;
		
		.section{
			
			.section-information{
				width: 65%;
				margin: 60px auto 0;
				.information{
					overflow: hidden;
					margin-bottom: 80px;
					img{
						float: left;
						width: 50%;
					}
					div{
						float: left;
						width: 50%;
						padding-left: 80px;
						box-sizing: border-box;
						h3{
							font-size:30px;
							font-family:PingFang-SC-Regular,PingFang-SC;
							font-weight:400;
							color:rgba(0,0,0,1);
							line-height:42px;
							padding:80px 0 40px;
							box-sizing: border-box;
						}
						p{
							font-size:20px;
							font-family:PingFang-SC-Regular,PingFang-SC;
							font-weight:400;
							color:rgba(0,0,0,1);
							line-height:28px;
						}
					}

					&:nth-of-type(2){
						div{
							text-align: right;
							padding: 0 80px 0 0;
						}
					}
				}

			}

			.section-team{
				width: 90%;
				margin: 0 auto;
				h3{
					font-size:30px;
					font-family:PingFang-SC-Regular,PingFang-SC;
					font-weight:400;
					color:rgba(0,0,0,1);
					line-height:42px;
					text-align: center;
				}
				.team{
					padding: 60px 0;
					box-sizing: border-box;
					overflow: hidden;
					div{
						width: 30%;
						float: left;
						position: relative;
						margin-right: 40px;
						&:last-of-type{
							margin: 0;
						}
						b{
							position: absolute;
							left: 50%;
							top:50%;
							transform: translate(-50%,-50%);
							font-size:30px;
							font-family:PingFang-SC-Bold,PingFang-SC;
							font-weight:bold;
							color:rgba(255,255,255,1);
							line-height:42px;
						}
					}
				}
			}

		}
	}
		
	
</style>
