<template>
	<div class="aboutWe">
		<!-- section -->
		<div class="banner">
			<img src="../assets/img/编组 2.png" alt="">
		</div>
		
		<div class="section">
			<div class="section-information">
				<div class="information">
					<img src="../assets/img/编组 3.png" alt="">
					<div>
						<h3>信任共筑携手美好未来</h3>
						<p>保险产品繁杂多样，我们深入了解市场上的各类保险产品，<br/>为用户提供保险知识和专业测评。<br/>中立、客观、专业，是我们不变的初心。</p>
					</div>
				</div>
				<div class="information">
					<div>
						<h3>互利共赢打造和谐生态</h3>
						<p>保险测评师专业解答用户的各类疑问，根据用户实际家庭情况，提供更多的保障建议，帮助用户买对保险，买好保险。</p>
					</div>
					<img src="../assets/img/编组 3备份.png" alt="">
				</div>
				<div class="information">
					<img src="../assets/img/编组 3备份 2.png" alt="">
					<div>
						<h3>线上线下专属顾问定制专业方案</h3>
						<p>保险产品繁杂多样，我们深入了解市场上的各类保险产品，<br/>为用户提供保险知识和专业测评。<br/>中立、客观、专业，是我们不变的初心。</p>
					</div>
				</div>
				<div class="information">
					<div>
						<h3>核心团队打造优质服务</h3>
						<p>保险测评师专业解答用户的各类疑问，根据用户实际家庭情况，提供更多的保障建议，帮助用户买对保险，买好保险。</p>
					</div>
					<img src="../assets/img/编组 3备份 3.png" alt="">
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	// @ is an alias to /src
	
	export default {
		name: 'aboutWe',
		components: {

		},
		created() {
			this.$store.state.pageType = 4
			this.$store.commit('mutationsChange', 4);
		},
	}
</script>

<style lang="scss" scoped>
	.aboutWe{
		padding-top: 90px;
		box-sizing: border-box;
		background-color: #EFF0F5;

		.section{
			overflow: hidden;
			.section-information{
				width: 65%;
				margin: 40px auto 0;
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

					&:nth-of-type(2n){
						div{
							text-align: right;
							padding: 0 80px 0 0;
						}
					}
				}

			}

		}
	}

</style>
