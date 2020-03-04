<template>
	<div class="article">
		<!-- section -->
		<div class="section">
            <div class="route">
                <span>{{$route.query.title}}</span>
                <img src="../assets/img/icon-arrowright.png" alt="">
                <span>{{$route.query.subtitle}}</span>
            </div>
            
            <div class="content">
                <div class="content-left">
                    <h3>{{detail.title}}</h3>
                    <p>原创：知星保 <span>{{detail.publishTime | formatDate}}</span></p>

                    <div v-html="detail.formatContent"></div>
                </div>
                <!-- <div class="content-right">
                    <img src="../assets/img/扫描二维码.png" alt="">
                </div> -->
            </div>

        </div>

	</div>
</template>

<script>
	// @ is an alias to /src
	import {
		apiArticle
	} from '@/api/api'; // 导入我们的api接口
	export default {
		name: 'article',
		components: {

        },
        data() {
            return {
                detail:{}
            }
        },
        methods: {
            // 获取数据
			onLoad() {
				// 调用api接口，并且提供了两个参数                
				apiArticle('/api/article/show/' + this.$route.query.id, {}).then(res => {
				
                        this.detail = res
				})
			}
        },
        filters: {
			formatDate: function(value) {
				let date = new Date(value);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				
				return y + '-' + MM + '-' + d;
			}
		},
		created() {
            this.onLoad()
		},
	}
</script>

<style lang="scss" scoped>
	.article{
		padding-top: 0.9rem;
		box-sizing: border-box;
		background-color: #EFF0F5;

		.section{
			width: 80%;
            margin: 0 auto;
            overflow: hidden;
            padding-bottom: 0.4rem;
            .route{
                padding: 0.2rem;
                span{
                    font-size:0.18rem;
                    font-family:PingFang-SC-Medium,PingFang-SC;
                    font-weight:500;
                    color:rgba(0,0,0,1);
                }
                img{
                    width: 0.25rem;
                    height: 0.25rem;
                    vertical-align: middle;
                    margin-bottom: 0.05rem;
                }
            }
            .content{
                overflow: hidden;
                .content-left{
                    float: left;
                    width: 75%;
                    background-color: #fff;
                    padding: 0.2rem;
                    box-sizing: border-box;
                    h3{
                        font-size:0.3rem;
                        font-family:PingFang-SC-Medium,PingFang-SC;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:0.42rem;
                    }
                    p{
                        font-size:0.14rem;
                        font-family:PingFang-SC-Medium,PingFang-SC;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:0.2rem;
                        padding: 0.2rem 0;
                        span{
                          margin-left: 0.2rem;
                        }
                    }
                }
                .content-right{
                    float: left;
                    width: 25%;
                }
            }

		}
	}

</style>
