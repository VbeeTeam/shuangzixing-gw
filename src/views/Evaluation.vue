<template>
	<div class="evaluation">
        <div class="route">
            <span>{{$route.query.title}}</span>
            <img src="../assets/img/icon-arrowright.png" alt="">
            <span>{{$route.query.subtitle}}</span>
        </div>
        <div class="banner">
            <div class="banner-title">
                <div class="banner-top">
                    <img src="../assets/img/icon_文章列表.png" alt="">
                    <h3>{{detail.title}}</h3>
                </div>
                <p>{{detail.subtitle}}<span>（共{{detail.articleList.length}}篇文章）</span></p>
            </div>
            
        </div>
		<!-- section -->
		<div class="section">
            
            <div class="section-left">
                
                <ul class="list">
                    <li v-for="(item,index2) in detail.articleList" :key="index2" @click="toArticle(item)">
                        <img class="img" :src="item.coverUrl" alt="">
                        <div class="list-right">
                            <h3>{{item.title}}</h3>
                            <div class="list-icon">
                                <div>
                                    <img src="../assets/img/icon_comments.png" alt="">
                                    <span>0</span>
                                </div>
                                <div>
                                    <img src="../assets/img/icon_eye备份.png" alt="">
                                    <span>{{item.visits}}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <!-- <div class="lookAll">
                    查看更多
                </div> -->
            </div>
            <div class="section-right">
                <img src="../assets/img/编组 8备份.png" alt="">
                <!-- <img src="../assets/img/扫描二维码.png" alt=""> -->
            </div>
           
        </div>

	</div>
</template>

<script>
	// @ is an alias to /src
	import {
		apiSpecialList
	} from '@/api/api';
	export default {
		name: 'evaluation',
		components: {

        },
        data(){
            return {
                detail:null,
                lists:[],
            }
        },
        methods: {
            //专题文章列表
            getList() {
                apiSpecialList("/api/specialTopic/app/list/" + this.$route.query.id).then((res)=>{
						
					this.detail = res
						
				})
            },
            
            //跳转文章详情
			toArticle(a){
				if (a.wechatArticleUrl != "") {
					window.open(a.wechatArticleUrl)
				} else {
					this.$router.push({
						path: '/article',
						query: {
							id: a.id
						}
					});
				}

			},
        },
		created() {
           this.getList()
		},
	}
</script>

<style lang="scss" scoped>
	.evaluation{
		padding-top: 0.9rem;
		box-sizing: border-box;
		background-color: #EFF0F5;

        .route{
            width: 80%;
            margin: 0 auto;
            padding: 0.2rem;
            overflow: hidden;
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
        .banner{
            width: 100%;
            height: 2rem;
            background: url(../assets/img/banner-4.png) center top;
            .banner-title{
                width: 80%;
                margin: 0 auto;
                padding-top: 0.7rem;
                .banner-top{
                    overflow: hidden;
                img{
                    float: left;
                    width: 0.44rem;
                    height: 0.44rem;
                    margin-right: 0.1rem;
                    vertical-align: middle;
                }
                h3{
                    float: left;
                    font-size:0.28rem;
                    font-family:PingFang-SC-Bold,PingFang-SC;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                    line-height:0.4rem;
                }
            }
            p{
                padding-left: 0.44rem;
                margin-top: 0.2rem;
                font-size: 0.2rem;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:0.28rem;
                span{
                    font-size:0.14rem;
                    font-family:PingFang-SC-Medium,PingFang-SC;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:0.2rem;
                    margin-left: 0.2rem;
                }
            }
            }
            
        }

		.section{
			width: 80%;
            margin: 0 auto;
            overflow: hidden;
            padding-bottom: 0.4rem;
            .section-left{
				float: left;
				width: 70%;
                .list{
                    overflow: hidden;
                    background-color: #fff;
                    margin-top:0.2rem;
                    li{
                        padding: 0.1rem;
                        overflow: hidden;
                        .img{
                            width: 1.35rem;
                            height: 1.05rem;
                            float: left;
                        }
                        .list-right{
                            position: relative;
							width: 80%;
                            height: 1.05rem;
                            float: left;
                            padding: 0.1rem 0.2rem;
                            box-sizing: border-box;
                            h3{
                                font-size:0.14rem;
                                font-family:PingFang-SC-Medium,PingFang-SC;
                                font-weight:500;
                                color:rgba(51,51,51,1);
                                line-height:0.2rem;
                            }
                            .list-icon{
                                position: absolute;
                                left: 0.2rem;
                                bottom: 0.1rem;
                                div{
                                    float: left;
                                    margin-right: 0.2rem;
                                    img{
                                        width: 0.15rem;
                                        height: 0.15rem;
                                        margin-right: 0.02rem;
                                        vertical-align: middle;
                                    }
                                    span{
                                        font-size:0.12rem;
                                        font-family:DIN-Medium,DIN;
                                        font-weight:500;
                                        color:#ccc;
                                        line-height:0.15rem;
                                    }
                                }
                            }
                        }
                    }
				}

				.lookAll{
					width: 100%;
					font-size:0.14rem;
                    text-align: center;
					font-family:PingFang-SC-Medium,PingFang-SC;
					font-weight:500;
					color:rgba(255,255,255,1);
					line-height:0.2rem;
					padding: 0.2rem 0;
					box-sizing: border-box;
					background-color: #97C3FC;
				}
			}
			.section-right{
				float: right;
				width: 23%;
                margin-top: 0.2rem;
				img{
					display: block;
				}
			}
		}
	}

</style>
