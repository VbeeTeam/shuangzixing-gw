<template>
	<div class="news">
		<!-- banner -->
		<div class="banner">
			<img src="../assets/img/bannner-3.png" alt="">
		</div>

		<!-- section -->
		<div class="section">
			<ul class="section-list">
				<li>
					<div class="list-top">
						<img src="../assets/img/新闻02.png" alt="">
						<span>星池官网上线</span>
					</div>
					<div class="list-section">
						<div class="border"></div>
						<img src="../assets/img/编组 3.png" alt="">
					</div>
				</li>
				<li>
					<div class="list-top">
						<img src="../assets/img/新闻02.png" alt="">
						<span>星池团队落户宁波中心大厦</span>
					</div>
					<div class="list-section">
						<div class="border"></div>
						<img src="../assets/img/编组 2.png" alt="">
					</div>
				</li>
				<li>
					<div class="list-top">
						<img src="../assets/img/新闻02.png" alt="">
					</div>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: 'news',
		components: {

		},
		data() {
			return {
				
			}
		},
		created() {
			this.$store.state.pageType = 3
			this.$store.commit('mutationsChange', 3);
		},

		methods: {
		
		}
	}
</script>


<style lang="scss" scoped>
	.news{
		padding-top: 81px;
		box-sizing: border-box;
		background-color: #F7FBFF;
		.section{
			width: 50%;
			margin: 60px auto 100px;
			.section-list{
				position: relative;
				li{
					overflow: hidden;
				}
			
				.list-top{
					img{
						width: 32px;
						vertical-align: middle;
					}
					span{
						font-size:14px;
						font-family:PingFang-SC-Regular,PingFang-SC;
						font-weight:400;
						color:rgba(1,109,248,1);
						margin-left: 20px;
					}
				}
				.list-section{
					
					img{
						float: left;
						margin-left: 175px;
					}
				}
			}

			.section-list:after{
				content:"";
				width:1px;
				height:90%;
			background-color: #016DF8;
			position:absolute;
			z-index:1;
			left:16px;
			top:28px;
        }
		}
	}

</style>
