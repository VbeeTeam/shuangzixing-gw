<template>
	<div class="search">
		<!-- section -->
		<div class="section">
            <div class="section-top">
				<div class="search-left">
					<img src="../assets/img/icon-搜索.png" alt="">
					<input type="text" v-model="key" placeholder="输入搜索关键字">
				</div>
				<button @click="toSearch()">搜索</button>
			</div>

            <div class="strategy-list">
                <div class="strategy-nav">
                    <span v-for="(item,index1) in navList" :key="index1"
                    :class="{'active':liIndex == index1}" @click="changeNav(index1)">{{item}}</span>
                </div>
                <ul v-if="liIndex == 0" class="list">
                    <li v-for="(item,index2) in lists" :key="index2" @click="toArticle(item)">
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
                <ul v-if="liIndex == 1" class="list-product">
                    <li v-for="(item,index3) in lists" :key="index3">
                        <div class="list-left" :style="{background:'url('+ item.coverUrl +') no-repeat center top',backgroundSize:'cover'}">
                            <h3>{{item.name}}</h3>
                            <p>{{item.intro}}</p>
                            <ul>
                                <li v-for="(item2,index4) in item.insureProductItems" :key="index4">
                                    {{item2.itemName}}：{{item2.content}}
                                </li>
                            </ul>
                        </div>
                        <div class="list-right">
                            <p>￥<b>{{item.baseFee}}</b></p>
                            <div class="btn">
                                <button v-if="item.articleList[0].coverUrl"><a :href="item.articleList[0].coverUrl"><span>测评文章</span></a></button>
                                <button v-else style="border: none;"></button>
                                <button @click="toProductDetail(item.id)">查看详情</button>
                            </div>
                        </div>
                    </li>
                </ul>

                <div v-if="totalNum > 0" class="lookAll" @click="lookAll()">
					查看更多
				</div>
			</div>

        </div>

	</div>
</template>

<script>
	// @ is an alias to /src
	import {
		searchApi
	} from "@/api/api"
	export default {
		name: 'search',
		components: {

        },
        data() {
            return {
                navList:["文章","产品"],
				lists:[],
                liIndex:0,
                page:0,
                size:10,
                totalNum:null,
                key:"",
            }
        },
        methods: {

            //搜索接口
			search(){
				var obj = {
					keyword: this.key,
					type: this.liIndex == 0 ? 1 : 3,
					page:this.page,
					size:this.size
				}
				searchApi(obj).then((res) => {
                    this.totalNum = res.length
					
                    if(res.length > 0){
                        if(this.liIndex == 0){
                            const oldList = this.lists
                            this.lists = oldList.concat(res)
                        }else if(this.liIndex == 1){
                            const oldList = this.lists
                            this.lists = oldList.concat(res)
                            this.lists.forEach((item) => {
                                if (JSON.parse(item.articleList).length > 0) {
                                    item.articleList = JSON.parse(item.articleList)
                                }
                                if(item.insureProductItems != null){
                                    item.insureProductItems = item.insureProductItems.splice(0,2)
                                }
                               
                            })
                        }
                        
                    }else if(res.length == 0){
                       this.$toast({
                            text: '没有更多了',
                            type: 'info',
                            duration: 1000
                        })
                    }
                    
                })
            },
            //搜索
            toSearch(){
                this.search()
            },
            //切换搜索类型
            changeNav(index){

                this.liIndex = index
                this.lists = []
                this.page = 0
                this.totalNum = null

            },

            //查看更多
            lookAll(){
				
                if(this.totalNum > 0){
                    this.page = this.page + 1
                    this.search()
                }else{
                    this.$toast({
						text: '没有更多了',
						type: 'info',
						duration: 1000
					})
                }
            },
            //跳转文章详情
			toArticle(a){
				if (a.wechatArticleUrl != null) {
					window.open(a.wechatArticleUrl)
				} else {
					this.$router.push({
						path: '/article',
						query: {
                            id: a.id,
                            title: "搜索"
						}
					});
				}

            },
            //跳转产品详情
			toProductDetail(id){
				this.$router.push({path:'/productDetail',query:{id:id,title: "搜索"}})
			}

        },
		created() {
			
		},
	}
</script>

<style lang="scss" scoped>
	.search{
		padding-top: 0.9rem;
		box-sizing: border-box;
		background-color: #EFF0F5;

		.section{
			width: 80%;
            margin: 0 auto;
            overflow: hidden;
            padding-bottom: 0.4rem;
            .section-top{
                width: 75%;
                padding: 0.1rem 0;
                overflow: hidden;
                .search-left{
                float: left;
                width: 80%;
				height: 0.4rem;
				line-height: 0.4rem;
                background-color:#fff;
                box-sizing: border-box;
                img{
                    vertical-align: middle;
                }
                input{
                    border:none;
                    outline: none;
                    width: 90%;
                    font-size:0.16rem;
                    font-family:PingFang-SC-Regular,PingFang-SC;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    
                }
            }
                button{
                    float: left;
					height: 0.4rem;
                    padding: 0 0.42rem;
                    font-size:0.16rem;
                    font-family:PingFang-SC-Medium,PingFang-SC;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:0.25rem;
                    background-color: #016DF8;
                    border: none;
                    outline: none;
                    margin-left: 0.2rem;
                }
            }
            
            
            .strategy-list{
                width: 70%;
                margin-top: 0.2rem;
                text-align: center;
                .strategy-nav{
                    padding: 0.05rem 0;
                    margin-bottom: 0.3rem;
                    background-color: #fff;
                    span{
                        display: inline-block;
                        width: 24%;
                        font-size:0.14rem;
                        font-family:PingFang-SC-Regular,PingFang-SC;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height:0.2rem;
                        border-right: 1px solid #DCDFE6;
                        cursor: pointer;
                        &:last-of-type{
                            border: none;
                        }
                    }
                    .active{
                        font-weight:bold;
                        color:rgba(1,109,248,1);
                    }
                }
                .list{
                    overflow: hidden;
                    text-align: left;
                    min-height: 3rem;
                    background-color: #fff; 
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
                .list-product{
                    text-align: left;
                    overflow: hidden;
                    min-height: 3rem;
                    background-color: #fff;
                    li{
                        padding: 0.2rem 0.1rem;
                        overflow: hidden;
                        border-bottom: 1px dashed #016DF8;
                        &:last-of-type{
                            border: none;
                        }
                        .list-left{ 
                            float: left;
                            width: 70%;
                            height: 2rem;
                            padding: 0.2rem;
                            box-sizing: border-box;
                            h3{
                                font-size:0.18rem;
                                font-family:PingFang-SC-Bold,PingFang-SC;
                                font-weight:bold;
                                color:rgba(0,0,0,0.85);
                                line-height:0.25rem;
                            }
                            p{
                                font-size:0.16rem;
                                font-family:PingFang-SC-Medium,PingFang-SC;
                                font-weight:500;
                                color:rgba(102,102,102,1);
                                line-height:0.22rem;
                                margin: 0.2rem 0 0.5rem;
                            }
                            ul{
                                li{
                                    width: 60%;
                                    padding: 0;
                                    font-size:0.14rem;
                                    font-family:PingFang-SC-Medium,PingFang-SC;
                                    font-weight:500;
                                    color:rgba(102,102,102,1);
                                    line-height:0.2rem;
                                    border: none;
                                    list-style: inside;
                                    overflow: hidden;
                                    text-overflow:ellipsis;
                                    white-space: nowrap;
                                }
                                li::before {  
                                    color: #016DF8;
                                }
                            }
                        }
                        .list-right{
                            float: left;
                            width: 30%;
                            height: 2rem;
                            position: relative;
                            p{
                                font-size:0.18rem;
                                font-family:PingFang-SC-Bold,PingFang-SC;
                                font-weight:bold;
                                color:rgba(254,160,58,1);
                                line-height:0.25rem;
                                text-align: right;
                                padding-right: 0.1rem;
                                b{
                                    font-size: 0.3rem;
                                    
                                }
                            }
                            .btn{
                                position: absolute;
                                right: 0.2rem;
                                bottom: 0.1rem;
                                button{
                                    font-size:0.14rem;
                                    font-family:PingFang-SC-Bold,PingFang-SC;
                                    font-weight:bold;
                                    color:rgba(1,109,248,1);
                                    line-height:0.2rem;
                                    border:1px solid rgba(1,109,248,1);
                                    padding: 0.05rem 0.2rem;
                                    border-radius: 0.25rem;
                                    background-color: #fff;
                                    a{
                                        color:rgba(1,109,248,1);
                                    }
                                    &:last-of-type{
                                        background-color: #016DF8;
                                        color: #fff;
                                        margin-left: 0.2rem;
                                    }
                                }
                            }
                        }
                    }
                    
                }


                .lookAll{
					width: 100%;
					font-size:0.14rem;
					font-family:PingFang-SC-Medium,PingFang-SC;
					font-weight:500;
					color:rgba(255,255,255,1);
					line-height:0.2rem;
					padding: 0.2rem 0;
					box-sizing: border-box;
					background-color: #97C3FC;
				}
            }
        
		}
	}

</style>
