<template>
	<div class="top">
		<div class="top-box">
			
			<div class="logo-img">
				<img src="../assets/img/logo.svg" />
			</div>

			<ul class="top-nav" :class="{'nav-show': !navImg}">
				<li @mouseover='hoverTest(1)' @mouseout='hoverOut()'>
					<router-link to="/">
						<span>首页</span><span>HOME</span>
					</router-link>
				</li>


				<li @mouseover='hoverTest(2)' @mouseout='hoverOut()'>
					<router-link to="/company">
						<span>企业</span><span>COMPANY</span>
					</router-link>
				</li>


				<li @mouseover='hoverTest(3)' @mouseout='hoverOut()'>
					<router-link to="/news">
						<span>新闻</span><span>NEWS</span>
					</router-link>
				</li>


				<li @mouseover='hoverTest(4)' @mouseout='hoverOut()'>
					<router-link to="/cooperation">
						<span>合作</span><span>COOPERATION</span>
					</router-link>
				</li>

				<div class="nav-border">
				</div>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				pageType: null,
				navImg: true
			}
		},
		computed: {
			listenshowpage() {
				return this.$store.state.pageType
			}
		},
		watch: {
			listenshowpage: {
				//深度监听，可监听到对象、数组的变化
				handler(newV) {
					// do something, 可使用this
					this.pageType = newV
					this.hoverOut()
				},
				deep: true

			}
		},
		created() {

		},
		methods: {
			// 头部划过效果
			hoverTest(data) {
				if (data == 1) {
					$(".nav-border").stop().animate({
						left: '4%'
					}, 350);
				} else if (data == 2) {
					$(".nav-border").stop().animate({
						left: '29%'
					}, 350);
				} else if (data == 3) {
					$(".nav-border").stop().animate({
						left: '55%'
					}, 350);
				} else if (data == 4) {
					$(".nav-border").stop().animate({
						left: '80%'
					}, 350);
				}

			},
			//划过离开
			hoverOut() {
				if (this.pageType == 1) {
					$(".nav-border").stop().animate({
						left: '4%'
					}, 350);
				} else if (this.pageType == 2) {
					$(".nav-border").stop().animate({
						left: '29%'
					}, 350);
				} else if (this.pageType == 3) {
					$(".nav-border").stop().animate({
						left: '55%'
					}, 350);
				} else if (this.pageType == 4) {
					$(".nav-border").stop().animate({
						left: '80%'
					}, 350);
				}
			},

			//点击nav
			changeNav() {
				
				if (this.navImg) {
					$(".top-nav").slideDown(400, ()=> {
						this.navImg = false
						
					})
				}else{
					$(".top-nav").slideUp(400, ()=> {
						this.navImg = true
						
					})
				}
			}
		},



	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.top {
		width: 100%;
		height: 0.8rem;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		background-color: #fff;
		min-width: 1200px;
	}

	.top-box {
		width: 80%;
		height: 100%;
		margin: 0 auto;
	}

	.top .logo-img {
		float: left;
		margin-top: 0.1rem;
	}
	.top .logo-img img{
		display: block;
		width: 1.6rem;
	}

	.top-nav {
		float: left;
		margin-left: 2rem;
		position: relative;
		width: 60%;
	}

	.nav-border {
		position: absolute;
		left: 4%;
		bottom: 0;
		width: 10%;
		height: 4px;
		background-color: #016DF8;
		margin-left: 3%;
	}

	.top-nav li {
		float: left;
		width: 25%;
		text-align: center;
		padding: 0.17rem 0;
		box-sizing: border-box;
	}

	.top-nav li a {
		color: #000;
	}

	.top-nav li:hover a {
		cursor: pointer;
		color: #016DF8;
	}

	.top-nav li .router-link-exact-active {
		color: #016DF8;
	}

	.top-nav li:last-child {
		margin-right: 0;
	}

	.top-nav li span:first-child {
		display: block;
		font-size: 0.2rem;
		font-family: FZLanTingHei-R-GBK;
		font-weight:600;
		white-space: nowrap;
	}

	.top-nav li span:nth-child(2) {
		display: block;
		font-size: 0.1rem;
		font-family: FZLanTingHei-R-GBK;
		font-weight: 400;
		opacity: 0.6;
		white-space: nowrap;
		margin-top: 0.04rem;
	}

	
</style>
