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
                <img src="../assets/img/扫描二维码.png" alt="">
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
		padding-top: 90px;
		box-sizing: border-box;
		background-color: #EFF0F5;

        .route{
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            overflow: hidden;
            span{
                font-size:18px;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(0,0,0,1);
            }
            img{
                width: 25px;
                height: 25px;
                vertical-align: middle;
                margin-bottom: 5px;
            }
        }
        .banner{
            width: 100%;
            height: 200px;
            background: url(../assets/img/banner-4.png) center top;
            .banner-title{
                width: 80%;
                margin: 0 auto;
                padding-top: 70px;
                .banner-top{
                    overflow: hidden;
                img{
                    float: left;
                    width: 44px;
                    height: 44px;
                    margin-right: 10px;
                    vertical-align: middle;
                }
                h3{
                    float: left;
                    font-size:28px;
                    font-family:PingFang-SC-Bold,PingFang-SC;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                    line-height:40px;
                }
            }
            p{
                padding-left: 44px;
                margin-top: 20px;
                font-size:20px;
                font-family:PingFang-SC-Medium,PingFang-SC;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:28px;
                span{
                    font-size:14px;
                    font-family:PingFang-SC-Medium,PingFang-SC;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:20px;
                    margin-left: 20px;
                }
            }
            }
            
        }

		.section{
			width: 80%;
            margin: 0 auto;
            overflow: hidden;
            padding-bottom: 40px;
            .section-left{
				float: left;
				width: 70%;
                .list{
                    overflow: hidden;
                    background-color: #fff;
                    margin-top:20px;
                    li{
                        padding: 10px;
                        overflow: hidden;
                        .img{
                            width: 135px;
                            height: 105px;
                            float: left;
                        }
                        .list-right{
                            position: relative;
							width: 80%;
                            height: 105px;
                            float: left;
                            padding: 10px 20px;
                            box-sizing: border-box;
                            h3{
                                font-size:14px;
                                font-family:PingFang-SC-Medium,PingFang-SC;
                                font-weight:500;
                                color:rgba(51,51,51,1);
                                line-height:20px;
                            }
                            .list-icon{
                                position: absolute;
                                left: 20px;
                                bottom: 10px;
                                div{
                                    float: left;
                                    margin-right: 20px;
                                    img{
                                        width: 15px;
                                        height: 15px;
                                        margin-right: 2px;
                                        vertical-align: middle;
                                    }
                                    span{
                                        font-size:12px;
                                        font-family:DIN-Medium,DIN;
                                        font-weight:500;
                                        color:#ccc;
                                        line-height:15px;
                                    }
                                }
                            }
                        }
                    }
				}

				.lookAll{
					width: 100%;
					font-size:14px;
                    text-align: center;
					font-family:PingFang-SC-Medium,PingFang-SC;
					font-weight:500;
					color:rgba(255,255,255,1);
					line-height:20px;
					padding: 20px 0;
					box-sizing: border-box;
					background-color: #97C3FC;
				}
			}
			.section-right{
				float: right;
				width: 23%;
                margin-top: 20px;
				img{
					display: block;
				}
			}
		}
	}

</style>
