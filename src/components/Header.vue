<template>
	<div class="top">
		<div class="top-box">
			
			<div class="logo-img">
				<img src="../assets/img/logo.png" />
			</div>

			<ul class="top-nav" :class="{'nav-show': !navImg}">
				<li @mouseover='hoverTest(1)' @mouseout='hoverOut()'>
					<router-link to="/">
						<span>首页</span>
					</router-link>
				</li>


				<li @mouseover='hoverTest(2)' @mouseout='hoverOut()'>
					<router-link to="/classRoom">
						<span>保险课堂</span>
					</router-link>
				</li>


				<li @mouseover='hoverTest(3)' @mouseout='hoverOut()'>
					<router-link to="/product">
						<span>产品精选</span>
					</router-link>
				</li>


				<li @mouseover='hoverTest(4)' @mouseout='hoverOut()'>
					<router-link to="/aboutWe">
						<span>关于我们</span>
					</router-link>
				</li>

				<div class="nav-border">
				</div>
			</ul>

			<div class="top-search">
				<div class="search-left">
					<img src="../assets/img/icon-搜索.png" alt="">
					<input type="text" placeholder="输入搜索关键字">
				</div>
				<button @click="toSearch()">搜索</button>
			</div>

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
						left: '2%'
					}, 350);
				} else if (data == 2) {
					$(".nav-border").stop().animate({
						left: '27%'
					}, 350);
				} else if (data == 3) {
					$(".nav-border").stop().animate({
						left: '53%'
					}, 350);
				} else if (data == 4) {
					$(".nav-border").stop().animate({
						left: '78%'
					}, 350);
				}

			},
			//划过离开
			hoverOut() {
				if (this.pageType == 1) {
					$(".nav-border").stop().animate({
						left: '2%'
					}, 350);
				} else if (this.pageType == 2) {
					$(".nav-border").stop().animate({
						left: '27%'
					}, 350);
				} else if (this.pageType == 3) {
					$(".nav-border").stop().animate({
						left: '53%'
					}, 350);
				} else if (this.pageType == 4) {
					$(".nav-border").stop().animate({
						left: '78%'
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
			},
			//跳转搜索页
			toSearch(){
				this.$router.push({path:'/search'})
			}
		},



	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.top {
		width: 100%;
		height: 80px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
		background-color: #fff;
	}

	.top-box {
		width: 80%;
		height: 100%;
		margin: 0 auto;
	}

	.top .logo-img {
		float: left;
		width: 200px;
		height: 80px;
	}

	.top-nav {
		float: left;
		margin-left: 170px;
		position: relative;
		width: 40%;
		padding-top: 22px;
	}

	.nav-border {
		position: absolute;
		left: 2%;
		bottom: 0;
		width: 14%;
		height: 4px;
		background-color: #016DF8;
		margin-left: 3%;
	}

	.top-nav li {
		float: left;
		width: 25%;
		text-align: center;
		padding: 17px 0;
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
		font-size: 18px;
		font-family:PingFang-SC-Bold,PingFang-SC;
		font-weight:600;
		white-space: nowrap;
	}

	.top-search{
		padding-top: 20px;
		float: right;
		.search-left{
			float: left;
			background-color: #F2F6FC;
			margin-right: 10px;
			img{
				width: 30px;
				height: 30px;
				vertical-align: middle;
			}
			input{
				font-size:14px;
				font-family:PingFang-SC-Regular,PingFang-SC;
				font-weight:400;
				color:rgba(153,153,153,1);
				line-height:20px;
				border: none;
				outline: none;
				background-color: #F2F6FC;
			}
		}
		button{
			float: left;
			font-size:14px;
			font-family:PingFang-SC-Regular,PingFang-SC;
			font-weight:400;
			color:rgba(255,255,255,1);
			line-height:20px;
			background-color: #016DF8;
			padding: 5px 16px;
			outline: none;
			border: none
		}
	}
</style>
