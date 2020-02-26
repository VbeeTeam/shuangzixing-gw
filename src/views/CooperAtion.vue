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
		padding-top: 0.8rem;
		box-sizing: border-box;
		background-color: #F7FBFF;
	}

	.cooperation-img {
		width: 70%;
		overflow: hidden;
		margin: 0.54rem auto 0;
		padding-left: 20%;
	}

	.cooperation-img img {
		float: left;
		width: 4rem;
		margin-right: 0.6rem;
	}

	.cooperation-map {
		width: 70%;
		overflow: hidden;
		margin: 0.9rem auto 0;
		padding-left: 20%;
		padding-bottom: 0.4rem;
	}

	.cooperation-map .img {
		float: left;
		width: 9rem;
	}
	
	.map-right {
		float: left;
		h3{
			font-size:0.14rem;
			font-family:PingFang-SC-Regular,PingFang-SC;
			font-weight:400;
			color:rgba(0,0,0,1);
			line-height:0.2rem;
			margin: 0.9rem 0 0.22rem;
		}
		.map-contact{
			img{
				width: 0.16rem;
				margin-right: 0.1rem;
				vertical-align: middle;
				&:last-of-type{
					margin-left: 0.2rem;
				}
			}
			span{
				font-size:0.14rem;
				font-family:PingFang-SC-Regular,PingFang-SC;
				font-weight:400;
				color:rgba(0,0,0,1);
				line-height:0.2rem;
				vertical-align: middle;
			}
		}
	}

	
</style>
