<template>
	<div class="cooperation">
		<!-- section -->
		<div class="banner">
			<img src="../assets/img/bannner-4 (1).png" alt="">
		</div>
		
		<div class="cooperation-img">
			<img src="../assets/img/bannner-4 (2).png" alt="">
			<img src="../assets/img/bannner-4 (3).png" alt="">
		</div>

		<div class="cooperation-map">
			<img class="img" src="../assets/img/bannner-4 (4).png" alt="">
			<div class="map-right">
				<h3>联系我们</h3>
				<div class="map-contact">
					<img src="../assets/img/bannner-4 (5).png" alt=""><span>商务总监 : &nbsp;吴之竟</span>
					<img src="../assets/img/bannner-4 (6).png" alt=""><span>13857960660</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	
	export default {
		name: 'cooperation',
		components: {

		},
		created() {
			this.$store.state.pageType = 4
			this.$store.commit('mutationsChange', 4);
		},
	}
</script>

<style lang="scss" scoped>
	.cooperation{
		padding-top: 81px;
		box-sizing: border-box;
		background-color: #F7FBFF;

	}

	.cooperation-img {
		width: 70%;
		overflow: hidden;
		margin: 54px auto 0;
		padding-left: 20%;
	}

	.cooperation-img img {
		float: left;
		margin-right: 60px;
	}

	.cooperation-map {
		width: 70%;
		overflow: hidden;
		margin: 90px auto;
		padding-left: 20%;
	}

	.cooperation-map .img {
		float: left;
	}
	
	.map-right {
		float: left;
		h3{
			font-size:14px;
			font-family:PingFang-SC-Regular,PingFang-SC;
			font-weight:400;
			color:rgba(0,0,0,1);
			line-height:20px;
			margin: 90px 0 22px;
		}
		.map-contact{
			img{
				width: 16px;
				margin-right: 10px;
				vertical-align: middle;
				&:last-of-type{
					margin-left: 20px;
				}
			}
			span{
				font-size:14px;
				font-family:PingFang-SC-Regular,PingFang-SC;
				font-weight:400;
				color:rgba(0,0,0,1);
				line-height:20px;
			}
		}
	}

	
</style>
