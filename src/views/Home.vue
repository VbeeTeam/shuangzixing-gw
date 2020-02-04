<template>
	<div class="home">
		<!-- banner -->
		<div class="banner">
			<img src="../assets/img/bannner.png" alt="">
		</div>
		
		<!-- section -->
		<div class="section">
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
		padding-top: 81px;
		box-sizing: border-box;
		background-color: #F7FBFF;
		.section{
			width: 70%;
			margin: 40px auto;
			.section-img{
				overflow: hidden;
				margin-bottom: 10px;
				img{
					float: left;
				}
				&:nth-of-type(2){
					img{
						float: right;
					}
				}
				
			}
		}
	}
	

</style>
