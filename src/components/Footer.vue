<template>
	<!-- 底部 -->
	<div class="footer">
		<div class="footer-section">
			<div class="section">
				<h3>友情链接</h3>
				<div>
					<a href="#">爱星保</a>
					<a href="#">知星保</a>
				</div>
			</div>
			<div class="section">
				<h3>关注我们</h3>
				<div>
					<img src="../assets/img/微博.png" alt="">
					<img src="../assets/img/QQ.png" alt="">
					<img src="../assets/img/微信.png" alt="">
				</div>
			</div>
			<div class="section">
				<h3>联系我们</h3>
				<div>
					<img src="../assets/img/电话.png" alt="">
					<span>0574-88100569</span>
				</div>
			</div>
			<div class="section">
				<h3>公众号</h3>
				<div>
					<img src="../assets/img/二维码.png" alt="">
					<span>爱星保</span>
				</div>    
			</div>
			<p>© 2020 宁波星池信息技术有限公司 <a href="http://www.beian.miit.gov.cn" target="_blank"> 浙ICP备20000702号-1 </a></p>

		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	/** footer **/
	.footer {
		width: 100%;
		overflow: hidden;
		background-color: #ffffff;
		padding: 0.4rem 0 0.5rem;
		box-sizing: border-box;
		min-width: 1200px;
		.footer-section{
			width: 80%;
			margin: 0 auto;
			h3{
				font-size:0.18rem;
				font-family:PingFang-SC-Bold,PingFang-SC;
				font-weight:bold;
				color:rgba(0,0,0,1);
				line-height:0.25rem;
			}
			.section{
				float: left;
				width: 25%;
				div{
					padding-top: 0.24rem;
					a{
						display: inline-block;
						font-size:0.16rem;
						font-family:PingFang-SC-Medium,PingFang-SC;
						font-weight:500;
						color:rgba(153,153,153,1);
						line-height:0.22rem;
						margin-right: 0.4rem;
					}
					span{
						font-size:0.16rem;
						font-family:PingFang-SC-Medium,PingFang-SC;
						font-weight:500;
						color:rgba(0,0,0,1);
					}
				}
				&:nth-of-type(2){
					div{
						img{
							margin-right: 0.4rem;
							width: 0.32rem;
						}
					}
				}
				&:nth-of-type(3){
					div{
						img{
							width: 0.23rem;
							margin-right: 0.1rem;
							vertical-align: middle;
						}
						span{
							
							vertical-align: middle;
						}
					}
				}
				&:nth-of-type(4){
					div{
						img{
							margin: 0 0.1rem 0 0.6rem;
							width: 1rem;
							vertical-align: middle;	
						}
						
					}
				}

			}
			
			p{
				text-align: center;
				font-size: 0.16rem;
				a{
					color:#000;
				}
			}
		}
	}
	
	
</style>
