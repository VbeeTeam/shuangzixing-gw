<template>
	<!-- 底部 -->
	<div class="footer">
		<div class="footer-section">
			<div class="section">
				<h3>友情链接</h3>
				<div>
					<a href="#">爱星保</a>
					<a href="#">银保监会</a>
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
					<span>知星保</span>
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
		padding: 40px 0 50px;
		box-sizing: border-box;
		min-width:1200px;
		.footer-section{
			width: 70%;
			margin: 0 auto;
			h3{
				font-size:18px;
				font-family:PingFang-SC-Bold,PingFang-SC;
				font-weight:bold;
				color:rgba(0,0,0,1);
				line-height:25px;
			}
			.section{
				float: left;
				width: 25%;
				div{
					padding-top: 24px;
					a{
						display: inline-block;
						font-size:16px;
						font-family:PingFang-SC-Medium,PingFang-SC;
						font-weight:500;
						color:rgba(153,153,153,1);
						line-height:22px;
						margin-right: 40px;
					}
					span{
						font-size:16px;
						font-family:PingFang-SC-Medium,PingFang-SC;
						font-weight:500;
						color:rgba(0,0,0,1);
						line-height:22px;
					}
				}
				&:nth-of-type(2){
					div{
						img{
							margin-right: 40px;
							width: 32px;
						}
					}
				}
				&:nth-of-type(3){
					div{
						img{
							vertical-align: middle;
							width: 24px;
							margin-right: 10px;
						}
						
					}
				}
				&:nth-of-type(4){
					div{
						img{
							
							margin: 0 10px 0 60px;
							width: 100px;
							vertical-align: middle;	
						}
						
					}
				}

			}
			
			p{
				text-align: center;
				a{
					color:#000;
				}
			}
		}
	}
	
	
</style>
