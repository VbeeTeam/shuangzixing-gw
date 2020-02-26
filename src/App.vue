<template>
	<div id="app">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'

	export default {
		name: 'app',
		components: {
			Header,
			Footer
		}
	}
	
	
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-width: 1200px;
	}
	@media screen and (max-width: 800px) {
		html {
			font-size: 16px !important;
		}
	}
	@media screen and (max-width:640px) {
		html{
			font-size: 14px !important;
		}
	}
	@media screen and (max-width:540px) {
		html{
			font-size: 12px !important;
		}
	}
	@media screen and (max-width:375px) {
		html{
			font-size: 10px !important;
		}
	}
	@media screen and (max-width:320px) {
		html{
			font-size: 9px !important;
		}
	}
	
	/*@media(max-width:540px){ html { font-size:84.375px; } } /*Android常用宽度*/
	/*@media(max-width:480px){ html { font-size:75px; } }		/*Android常用宽度*/
	/*@media(max-width:414px){ html { font-size:64.69px; } }  /*i6Plus,i7Plus宽度*/  
	/*@media(max-width:375px){ html { font-size:58.59px; } }	/*i6,i7宽度*/
	/*@media(max-width:360px){ html { font-size:56.25px; } }	/*Android常用宽度*/
	/*@media(max-width:320px){ html { font-size:50px; } }		/*i5宽度*/
</style>
