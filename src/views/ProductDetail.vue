<template>
	<div class="productDetail">
        <div class="route">
            <span>{{$route.query.title}}</span>
            <img src="../assets/img/icon-arrowright.png" alt="">
            <span>{{$route.query.subtitle}}险</span>
        </div>
        <div class="banner">
            <div class="banner-title">
                <div class="title-left">
                    <div class="banner-top">
                        <h3>{{detail.name}}</h3>
                        <span>{{detail.type}}险</span><span>{{detail.company.name}}</span>
                    </div>
                    <p><span v-for="(item,i) in detail.insureProductTags" :key = "i">{{item.name}} | </span></p>
                </div>
                <!-- <button @click="toHref()">立即投保</button> -->
            </div>
            
        </div>
		<!-- section -->
		<div class="section">
            
            <div class="section-left">
                <div class="left-top">
                    <div class="topChange">
                        <span v-for="(item,index1) in topNav" :key="index1"
                        :class="{'active' : liIndex1 == index1}" @click="topChange(1,index1)">{{item}}</span>
                    </div>
                    
                    <div class="topSection">
                        <!-- 保障项 -->
                        <ul v-if="liIndex1 == 0" class="ul">
                           <li v-for="(item,index2) in detail.insureProductItems" :key="index2">
								<b v-if="item.guardItem">{{item.itemName}}</b>
								<span v-if="item.guardItem">{{item.content}}</span>
							</li>
                        </ul>

                        <!-- 非保障项 -->
                        <ul v-if="liIndex1 == 1" class="ul ulNo">
							<li v-for="(item,index3) in detail.insureProductItems" :key="index3">
								<b v-if="!item.guardItem">{{item.itemName}}</b>
								<span v-if="!item.guardItem">{{item.content}}</span>
							</li>
						</ul>

                        <!-- 投保规则 -->
                        <ul v-if="liIndex1 == 2" class="ul">
							<li v-if="detail.insureAge">
								<b>投保年龄</b>
								<span>{{detail.insureAge}}</span>
							</li>
							<li v-if="detail.timeLimit">
								<b>保障期限</b>
								<span>{{detail.timeLimit}}</span>
							</li>
							<li v-if="detail.payMaxTimeLimit">
								<b>最长交费期限</b>
								<span>{{detail.payMaxTimeLimit}}</span>
							</li>
							<li v-if="detail.waitingPeriod">
								<b>等待期</b>
								<span>{{detail.waitingPeriod}}</span>
							</li>
							<li v-if="detail.forJob">
								<b>适用职业</b>
								<span>{{detail.forJob}}</span>
							</li>
							<li>
								<b>智能核保</b>
								<span v-if="detail.aiCheck">是</span>
								<span v-else>否</span>
								
							</li>
							<li v-if="detail.maxInsureAmount">
								<b>保额</b>
								<span>{{detail.maxInsureAmount}}万</span>
							</li>
							<li v-if="detail.exceptionClause">
								<b>免责条款</b>
								<span>{{detail.exceptionClause}}条</span>
							</li>
							<li v-if="detail.healthAdvice">
								<b>健康告知</b>
								<span>{{detail.healthAdvice}}条</span>
							</li>
							<li>
								<b>是否吸烟</b>
								<span v-if="detail.smoke">是</span>
								<span v-else>否</span>
							</li>
							<li>
								<b>收入要求</b>
								<span v-if="detail.incomeRequirement">有</span>
								<span v-else>无</span>
							</li>
						</ul>
                    </div>

                </div>
                <div class="left-top left-bottom">
                    <div class="topChange">
                        <span v-for="(item,index4) in bottomNav" :key="index4"
                        :class="{'active' : liIndex2 == index4}" @click="topChange(2,index4)">{{item}}</span>
                    </div>

                    <div class="bottomSection">
                        <ul v-if="liIndex2 == 0">
                            <li v-for="(item,index5) in detail.clauseFiles" :key="index5">
                                <a :href="item.url"><span>《{{item.fileName}}》</span></a>
                            </li>
                        </ul>
                         <ul v-if="liIndex2 == 1" class="articleList">
                            <li v-for="(item,index6) in detail.articleList" :key="index6">
                               <a :href="item.coverUrl"><span>{{item.title}}</span></a>
                            </li>
                        </ul>

                        <div v-if="liIndex2 == 2">
                           <b>{{detail.company.name}}</b>
                        </div>

                    </div>

                </div>
            </div>
            <div class="section-right">

               <div class="right-top">
                   <img src="../assets/img/icon_light.png" alt="">
                   <span>产品特色</span>
               </div>

                <div class="right-content">
                    <!-- 优点 -->
                    <div class="content">
                        <div class="content-top">
                            <img src="../assets/img/icon_good.png" alt="">
                            <span>产品亮点</span>
                        </div>
                        <div class="advantage-section" v-for="(item,index7) in advantage" :key="index7">
                            <span>{{index7 + 1}}.</span>
                            <p>{{item.content}}</p>
                        </div>
                    </div>
                    <!-- 缺点 -->
                    <div class="content">
                        <div class="content-top">
                            <img src="../assets/img/icon_notgood.png" alt="">
                            <span style="color:#FF877C">产品不足</span>
                        </div>
                        <div class="advantage-section" v-for="(item,index7) in advantage" :key="index7">
                            <span style="color:#FF877C">{{index7 + 1}}.</span>
                            <p>{{item.content}}</p>
                        </div>
                    </div>
                    <!-- 注意事项 -->
                    <div class="content">
                        <div class="content-top">
                            <img src="../assets/img/icon_注意事项.png" alt="">
                            <span style="color:#016DF8">注意事项</span>
                        </div>
                        <div class="advantage-section">
                            <p>{{detail.notice}}</p>
                        </div>
                    </div>
                    <!-- 适合人群 -->
                    <div class="content">
                        <div class="content-top">
                            <img src="../assets/img/icon_适合人群.png" alt="">
                            <span style="color:#016DF8">适合人群</span>
                        </div>
                        <div class="advantage-section">
                           <p>{{detail.applicablePopulation}}</p>
                        </div>
                    </div>
                    <!-- 综合评测 -->
                    <div class="content">
                        <div class="content-top">
                            <img src="../assets/img/icon_综合评测.png" alt="">
                            <span style="color:#016DF8">综合评测</span>
                        </div>
                        <div class="advantage-section">
                           <p>{{detail.applicablePopulation}}</p>
                        </div>
                    </div>

                </div>

            </div>
           
        </div>

	</div>
</template>

<script>
	// @ is an alias to /src
	import {
		productDetail
	} from '@/api/api';
	
	// import {
	// 	getDiseaseSpecies
	// } from '@/api/api';
	export default {
		name: 'productDetail',
		components: {

        },
        data(){
            return {
               topNav:['保障范围','非保障范围','投保规则'],
               bottomNav:['文章条款','测评文章','保险公司'],
               liIndex1:0,
               liIndex2:0,
               detail:{},
               advantage:[],

            }
        },
        methods: {
            onload() {
				
				productDetail("/api/insure/product/app/" + this.$route.query.id,{}).then(res => {
					
					this.detail = res
					
					this.advantage = res.insureProductFeatures.filter((item)=>{
						return item.merit
					})
					this.shortcoming = res.insureProductFeatures.filter((item)=>{
						return !item.merit
					})
					
					this.detail.articleList = JSON.parse(this.detail.articleList)
					this.detail.clauseFiles = JSON.parse(this.detail.clauseFiles)
					
				})
				
				// getDiseaseSpecies("/api/insure/product/app/getDiseaseSpecies").then(res =>{
					// this.speciesList = res
				
				// })

				
            },
            //切换产品信息
            topChange(a,index){

                if(a == 1){
                 this.liIndex1 = index

                }else{
                    this.liIndex2 = index
                }

            },
            //立即投保
            toHref(){
                window.location.href = this.detail.salesUrl
            }
            
        },
		created() {
			this.onload()
		},
	}
</script>

<style lang="scss" scoped>
	.productDetail{
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
                width: 75%;
                margin: 0 auto;
                padding-top: 0.9rem;
                .title-left{
                    float: left;
                    .banner-top{
                        overflow: hidden;
                        h3{
                            float: left;
                            font-size:0.28rem;
                            font-family:PingFang-SC-Bold,PingFang-SC;
                            font-weight:bold;
                            color:rgba(255,255,255,1);
                            line-height:0.4rem;
                            margin-right: 0.6rem;
                        }
                        span{
                            float: left;
                            font-size:0.14rem;
                            font-family:PingFang-SC-Bold,PingFang-SC;
                            font-weight:bold;
                            color:rgba(255,255,255,1);
                            line-height:0.2rem;
                            padding: 0.03rem 0.1rem;
                            background-color: #FEDA4F;
                            margin-right: 0.2rem;
                            margin-top: 0.1rem;
                            &:nth-of-type(2){
                                background-color: #00D6FB;
                            }
                        }
                    }
                    p{
                        margin-top: 0.2rem;
                        span{
                            font-size:0.2rem;
                            font-family:PingFang-SC-Medium,PingFang-SC;
                            font-weight:500;
                            color:rgba(255,255,255,1);
                            line-height:0.28rem;
                        }
                    }

                }
                button{
                    float: right;
                    font-size:0.2rem;
                    margin-top: 0.3rem;
                    font-family:PingFang-SC-Bold,PingFang-SC;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                    line-height:0.28rem;
                    padding: 0.1rem 0.5rem;
                    background-color: #FEA03A;
                    border-radius: 0.05rem;
                    border: none;
                    outline: none;
                }
                
            }
            
        }

		.section{
			width: 80%;
            margin: 0 auto;
            overflow: hidden;
            padding: 0.2rem 0;
            .section-left{
				float: left;
				width: 48%;
                .left-top{
                    background-color: #fff;
                    box-shadow:0px 10px 30px -12px rgba(0,0,0,0.2);
                    margin-bottom: 0.2rem;
                    .topChange{
                        border-bottom: 1px solid #E5F0FE;
                        span{
                            display: inline-block;
                            text-align: center;
                            width: 12%;
                            margin-left: 18%;
                            padding: 0.15rem 0 0.08rem;
                            box-sizing: border-box;
                            font-size:0.14rem;
                            font-family:PingFang-SC-Medium,PingFang-SC;
                            font-weight:500;
                            color:rgba(0,0,0,1);
                            line-height:0.2rem;
                        }
                        .active{
                            color: #016DF8;
                            border-bottom: 0.06rem solid #016DF8;
                        }
                    }
                    .topSection{
                        .ul {
                            padding: 0.1rem;
                            box-sizing: border-box;
                            li {
                                margin-bottom: 0.02rem;
                                
                                b {
                                    display: table-cell;
                                    word-wrap: break-word;
                                    width: 2rem;
                                    text-align: center;
                                    padding: 0.2rem 0;
                                    box-sizing: border-box;
                                    background-color: #A1BBFF;
                                    font-size: 0.14rem;
                                    font-weight: normal;
                                    color: rgba(0, 0, 0, 1);
                                    vertical-align: middle;
                                }

                                span {
                                    width: 5.1rem;
                                    display: table-cell;
                                    word-wrap: break-word;
                                    padding: 0.1rem;
                                    box-sizing: border-box;
                                    font-size: 0.14rem;
                                    font-weight: normal;
                                    color: rgba(0, 0, 0, 1);
                                    vertical-align: middle;
                                }

                                &:nth-of-type(2n) span {
                                    background-color: #F7F9FF;
                                }

                                &:nth-of-type(2n+1) span{
                                    background-color: #EAEFFF;
                                }

                            }
                        }
                        .ulNo{
						li{
							b{
								width: 0.4rem;
							}
							span{
								width: 6.6rem;
							}
						}
					}
                    
                    }
                }
                .left-bottom{
                    .bottomSection{
                        padding: 0.2rem;
                         a{
                            font-size:0.14rem;
                            font-family:PingFang-SC-Medium,PingFang-SC;
                            font-weight:500;
                            color:rgba(0,0,0,1);
                            line-height:0.2rem;
                        }
                       
                        .articleList{
                            a{
                                border-bottom: 1px solid #000;
                            }
                        }
                        
                    }
                }
			}
			.section-right{
				float: right;
				width: 48%;
                background-color: #fff;
                box-shadow:0px 10px 30px -12px rgba(0,0,0,0.2);
                
                .right-top{
                    border-bottom: 1px solid #E5F0FE;
                    padding: 0.12rem 0.2rem;
                    img{
                        width: 0.26rem;
                        height: 0.26rem;
                        vertical-align: middle;
                        margin-right: 0.04rem;
                    }
                    span{
                        display: inline-block;
                        font-size:0.16rem;
                        font-family:PingFang-SC-Bold,PingFang-SC;
                        font-weight:bold;
                        color:rgba(1,109,248,1);
                        vertical-align: middle;
                    }
                }

                .right-content{
                    padding: 0.1rem;
                    .content{
                        border:1px solid rgba(229,240,254,1);
                        margin-bottom: 0.2rem;
                        border-radius:0.04rem;
                    }
                    .content-top{
                        padding: 0.1rem;

                        img{
                            width: 0.24rem;
                            height: 0.24rem;
                            vertical-align: middle;
                            margin-right: 0.04rem;
                        }
                        span{
                            font-size:0.14rem;
                            font-family:PingFang-SC-Bold,PingFang-SC;
                            font-weight:bold;
                            color:#FEA03A;
                            vertical-align: middle;
                        }
                    }
                    .advantage-section {
                        overflow: hidden;
                        padding: 0.12rem 0.2rem;
						span {
                            float: left;
							margin-right: 0.5rem;
							vertical-align: middle;
							font-size: 0.14rem;
							font-weight: normal;
							color: rgba(254, 160, 58, 1);
						}

						p {
                            float: left;
							font-size: 0.14rem;
							font-weight: normal;
							color: rgba(0, 0, 0, 1);
							line-height: 0.16rem;
							white-space: pre-wrap;
						}

					}

                }

			}
		}
	}

</style>
