<template>
<div id="app">
   <nav class="navbar navbar-fixed-top navbar-inverse" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>	
				</button>
				<a  class="navbar-brand" href="#"></a>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li>
						<a href="#">
							<span class="glyphicon glyphicon-user" style="font-size: 20px; text-shadow: rgb(25, 25, 25) 3px 2px 2px;line-height:25px;">Welcome
							</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="glyphicon glyphicon-exclamation-sign" 
							style=" font-size: 20px; 
							text-shadow: rgb(25, 25, 25) 3px 2px 2px;
							line-height:25px;" @click="logout"> 注销
							</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	
	</nav>
		<!--顶部导航栏结束-->
	<!--重叠错误用body{ padding-top:70px;}修改-->
	<!--页面主体-->
	<div class="outer">
	   <div class="container ">
	   <!--左部分列表组，进行查找，新建清单功能-->
       		<div class="list-group col-md-4">
       			<div class="list-group-item">
       				<div class="list-group-item-heading">
       				任务清单列表
       				</div>
       				<div class="form-group">
       				  	<input type="text" class="form-control" placeholder="请输入查找内容" v-model="searchData"><br>   
              <!--<input type="text" v-model="inputtask.uncompletedname" class="form-control" placeholder="编辑任务" 
                  @keyup.enter="edit"/>   <br>--> 
                               
       				  	<!--输入查找内容与右边文字绑定-->
       				  	<div class="btn btn-lg btn-block btn-danger" data-toggle="modal" data-target="#MyDay">
       				  		我的一天
       				  	</div>
                  <div class="modal fade" id="MyDay" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                               <div class="modal-dialog">
                                   <div class="modal-content">
                                      <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                         &times;
                                        </button>
                                       <h4 class="modal-title" id="myModalLabel">
                                          我的一天
                                        </h4>

                                      </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                      <template>
                                         <div v-for="item, index in myDay" >
                                            <span style="color: red;"> {{ item.uncompletedname }}</span>
                                            <span>提交日期：{{ item.deadline}}</span>
                                            <span :class="item.isfinished ? 'glyphicon glyphicon-check pull-right' : 'glyphicon glyphicon-unchecked pull-right'"
                                            @click="item.isfinished = !item.isfinished;">
                                            </span>
                                            <span class="glyphicon glyphicon-trash pull-right " @click="item.ismyDay = false;">
                                            </span>
                                         </div>
                                      </template>
                                    </div>
                               </div>
                               <div class="modal-footer">
                                 <button type="button" class="btn btn-default" data-dismiss="modal">
                                     关闭
                                </button>
                                       </div>
                                   </div>
                                </div>
                            </div>
       				</div>
       			</div>
       			<div class="list-group-item" style="text-align: center;">
       				<!--<a class="glyphicon glyphicon-plus" style="text-decoration: none;" @click="newlist">
       				新建清单</a>-->
       				<a href="#" class="btn btn-lg btn-block btn-primary"
       				data-toggle="modal" data-target="#newlist">
       				  		<span class="glyphicon glyphicon-plus"></span>新建清单
       				  	</a>
       				  	<div class="modal fade" id="newlist" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
       				  		<div class="modal-dialog">
       				  			<div class="modal-content">
       				  				<div class="modal-header">
       				  					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x
       				  					</button>
       				  					<h4 class="modal-title" id="myModalLabel">
       				  						新建清单
       				  					</h4>
       				  				</div>
       		       		    	<div class="modal-body">
       				  					<div class="form-group">
       				  					<label for="listname">清单名</label>
       				  					<input type="text"  id="input_listname" class="form-control"
       				  						 v-model="arrtemplate.arrListname" />
       				  					</div>
       				  				</div>
       				  				<div class="modal-footer">
       				  					<button type="button" class="btn btn-default" data-dismiss="modal">
       				  						关闭
       				  					</button>
       				  					<button type="button" class="btn btn-primary" data-dismiss="modal" @click="save" >
       				  						保存
       				  					</button>
       				  				</div>
       				  			</div>      				  		</div>
       				  	</div>
       			</div>
 					<!--显示新建的清单列表-->
 				<template v-for="item, index in arrList">
                          
       	      <div class="list-group-item" >
       				<a   href="#" class="glyphicon glyphicon-th-list" style="text-decoration: none;" @click="showList(item, $event)">
       				{{ item.arrListname}}
       				</a>
       				<span v-if="curList === item.id" class="badge pull-right" v-model="listSize">{{ listSize}}</span>	
             <span  class="glyphicon glyphicon-trash pull-right" @click="removearrList(item, index)"></span>
       			</div>
       			</template> 			
       		</div>
	 <!--左部分列表组，进行查找，新建清单功能结束-->

	 <!--右部分面板，显示未完成和已完成的功能-->
       		<div class="col-md-8">
       			<div class="panel panel-primary" style="margin-top: 100px;">
       				<div class="panel-heading" style="padding-top: 60px; font-size: 20px;">
       					<span v-if="searchData ===''">代办任务清单</span>
                                          <span v-else>正在搜索 " {{  searchData }} "</span>
       				</div>
       				<div class="panel-body">
       					<div class="panel-group" id="accordion">
                                              
                              <div class="panel panel-warning">
                                  <div class="panel-heading">
                                     <h4 class="panel-title">
                                      <a data-toggle="collapse" data-parent="#accordion"
                                            href="#search_result" style="text-decoration: none;">
                                         toDo
                                     </a>
                                                                     
                                </h4>
                                </div>
                                    <div id="search_result" class="panel-collapse collapse in">
                                          <div class="panel-body">
                                               <table class="table table-striped"> 
                                                     <template >
                                                       <tr v-for="item, index in Newitems"  :key="index"> 
                                                       <span>{{ item.uncompletedname }}</span>
                                                          </tr>
                                                              </template>    
                                                              </table>
                                                    </div>
                                                </div>
                                            </div>
                                              
       						<div class="panel panel-warning">
       							<div class="panel-heading">
       								<h4 class="panel-title">
       									<a data-toggle="collapse" data-parent="#accordion"
       									href="#uncompleted" style="text-decoration: none;">
       										未完成的
       									</a>
                        <button class="glyphicon glyphicon-sort-by-attributes pull-right"
                         @click="uncompletedList.sort(compare('priority'))">
                        </button>
                       <!-- <button class="glyphicon glyphicon-sort-by-order-alt pull-right"
                         @click="uncompletedList.sort(compareBydate('deadline'))">-->
                        </button>
       								</h4>
       							</div>
       							<div id="uncompleted" class="panel-collapse collapse in">
       								<div class="panel-body">
       									<table class=" table table-striped">
       									<template v-for="item, index in uncompletedList">
       										<tr v-if="item.parentId === curList">
       											<td>
       											<!--循环任务名-->
       												<div class="alert alert-warning alert-dismissable">
       												<!--以下通过js方法改变选中状态,
       													循环遍历未完成内容-->
                 <div :class="item.ismyDay ? 'glyphicon glyphicon-star': 'glyphicon glyphicon-star-empty'"  @click="addtoMyday(item, $event)" >
                 </div>
       													<div :class="item.isfinished ? 'glyphicon glyphicon-check':'glyphicon glyphicon-unchecked'" @click="changeStatus(item, $event)">
       													</div>
       													<a href="#"  @click="changedetail(item, $event)">
       														{{ item.uncompletedname }}
       													</a>		
                                <!--<a href="#" @click="isEdit(item, index)">编辑</a>	-->
       												<button type="button" class="close" data-dismiss="alert" aria-hidden="true"
       												 @click="remove(item, index)"> &times;</button>
       												<br>
                              <span class="glyphicon glyphicon-calendar" style="margin-top: 2px;"></span>
                               {{ item.deadline }}
                              <template v-if="item.detailflag === true">
                                {{ item.detail}}
                              </template>
       												<!--此处利用vue+过滤器显示日期
       												<span class="glyphicon glyphicon-calendar" style="margin-top: 2px;">
       											</span> -->
       												</div>	    
       											</td>
       										</tr>
       									</template>
       					<!--未完成事项最后一行为添加待办事项按钮-->      								
                  	<tr>
       						     	<td>
       								 <a href="#" class="btn btn-primary btn-block"
       									 data-toggle="modal" data-target="#newtask">
       								 <span class="glyphicon glyphicon-plus"></span>
       								 添加待办事项
       								 </a>
                                	<div class="modal fade" id="newtask" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
       				  	     		<div class="modal-dialog">
       				  					<div class="modal-content">
       				  						<div class="modal-header">
       				  						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x
       				  						</button>
       				  							<h4 class="modal-title" id="myModalLabel">
       				  							新建待办事项
       				  							</h4>
       				  				</div>
       				  				<div class="modal-body">
       				  				    <div class="form-group">
       				  				    	<label for="parenttask">所属清单</label>
       				  				    	<input type="text" class="form-control" v-model="curList">
       				  				    </div>
       				  					<div class="form-group">
       				  						<label for="taskname">待办事项名</label>
       				  						<input type="text" class="form-control" placeholder="请输入事项名" v-model="inputtask.uncompletedname"/>
       				  					</div>
                          <div class="form-group">
                             <label for="deadline">完成期限</label>
                             <input type="text" id="test" v-model="inputtask.deadline" class="form-control">
                          </div>
                          <div class="form-froup">
                            <label for="detail">备注：</label>
                            <textarea  col="20" rows="1" v-model="inputtask.detail" class="form-control"></textarea>
                          </div>
       				  					<div class="form-group">
       				  						<label for="priority">优先级</label>
                            <select name="priority" v-model="inputtask.priority" class="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
       				  						
       				  					</div>
       				  				</div>
       				  				<div class="modal-footer">
       				  					<button type="button" class="btn btn-default" data-dismiss="modal">
       				  						关闭
       				  					</button>
       				  					<!--保存新的待办事物-->
       				  					<button type="button" class="btn btn-primary" data-dismiss="modal" @click="savenew">
       				  						保存
       				  					</button>
       				  					</div>
       				  				</div>
       				  				</div>
       				  			</div>
       								</td>
       							</tr>				
       				    	</table>
       	                      	<!--此处需要数组循环遍历显示未完成的任务-->							
       								</div>
       							</div>
       							<div class="panel panel-success">		
       							<div class="panel-heading">
       								<h4 class="panel-title">
       									<a data-toggle="collapse" data-parent="#accordion"
       									href="#completed" style="text-decoration: none;">
       										已完成的
       									</a>
                        <div :class="isShow ? 'glyphicon glyphicon-eye-open pull-right' :'glyphicon glyphicon-eye-close pull-right'" 
                        @click="isShow = !isShow;"></div>
       								</h4>
       							</div>
       							<div id="completed" class="panel-collapse collapse in">
       								<div class="panel-body" v-show="isShow">
       									<table class=" table table-striped">
       									   <template v-for="item, index in completedList">
       										<tr v-if="item.parentId === curList">
       											<td>
       											<!--循环任务名-->
       												<div class="alert alert-success alert-dismissable">
       												<!--以下通过js方法改变选中状态
       													循环遍历未完成内容-->
       													<label>
		                      	<!--以下循环遍历数组显示已完成的项目名-->
       														{{ item.uncompletedname}}
       													</label>
       											
       												<button type="button" class="close" data-dismiss="alert" aria-hidden="true" @click="removecompleted(item, index)"> &times;</button>
       												<br> 
                             
       												<!--此处利用vue+过滤器显示日期
       												<span class="glyphicon glyphicon-calendar" style="margin-top: 2px;">
       											</span>	--></div>
       											
       											
       											</td>
       										</tr>
       										</template>
       									</table>
       	                      	<!--此处需要数组循环遍历显示未完成的任务-->							
       								</div>
       							</div>
       							</div>
       						</div>
       					</div>
       				</div>
       			</div>
       		</div>
       		 <!--右部分面板，显示未完成和已完成的功能结束-->
       </div>
       </div>

 </div>
</template>
<script>
import myDatepicker from './vue-datepicker-es6.vue'
import Store1 from '../store1'
//import laydate from '../laydate/laydate.js'
       var itemcollection = "itemcollection";
       var storeitem = (function () { 
          return({
            additem: function (val) {
               
                localStorage.setItem(itemcollection, JSON.stringify(val));
            },
            getitems: function () {
              
                return JSON.parse(localStorage.getItem(itemcollection));
            },
            removeitem: function () {
             
                localStorage.removeItem(itemcollection);
            },
            clearall: function () {
              
                localStorage.clear();
            }
        });
    })();

    var todolists = "todolists";
    var storelist = (function () { //封装Localstorage
        return ({
            addlist: function (val) {
                //添加数据，键为todolist
                localStorage.setItem(todolists, JSON.stringify(val));
            },
            getlists: function () {
                //读取键为todolist的数据
                return JSON.parse(localStorage.getItem(todolists));
            },
            removelist: function () {
                //移除该站点下键为todolist的数据
                localStorage.removeItem(todolists);
            },
            clearall: function () {
                //清空该站点下的所有localStorage的数据
                localStorage.clear();
            }
        });
    })();
export default {
  data: function(){
       return{
              arrList: Store1.fetch(),//本地清单
              arrtemplate: { id: 0, arrListname: ''},//绑定新建清单输入框
              uncompletedList: storeitem.getitems() || [],
              checked: false,
              curList: 1,          //用于区别当前清单
              curTask: 0,
              inputtask: { parentId: 0, id: 0, uncompletedname:'', isfinished: false, 
                          ismyDay: false, priority: '', detail: '',detailflag: false,
                          deadline: ''
                        },   
              //定义新的待办事物
              /*completedList: storelist.getlists() || [],*/
              searchData: '',
              isShow: false
             // date: '2017-09-08'
    }
  },

  mounted: function(){
      console.log(laydate)
      laydate.render({
        elem: '#test',
        type:'datetime',
        done: (value) => {
          this.inputtask.deadline = value

        },
        theme: '#393D49'
  })
  },  
   // components: { 'date-picker': myDatepicker },
       methods: {
              //注销功能
              logout: function(){
                     this.$router.push({ path: '/'});
              },
              /*//编辑任务
              isEdit: function(item, index){
                  this.inputtask.uncompletedname = item.uncompletedname;
              },
              edit: function(item){
                  item.uncompletedname = this.inputtask.uncompletedname;
              },*/
              //改变详细信息显示状态
              changedetail: function(item, event){
                  item.detailflag = !item.detailflag;
              },
         
              //改变isMyday属性状态
              addtoMyday: function(item, event){
                     item.ismyDay = !item.ismyDay;
              },
              //排序
              compare: function(property){
                     return function(a, b){
                            return a[property] - b[property];
                     }
              },
              //日期排序
              compareBydate: function(property){
                  return function(a, b){
                        return a[property].join('') - b[property].join('');
                  }
              },
              //删除清单功能
              removearrList: function(item, index){
                     /*this.arrList.splice(index, 1);
                     for(var i=0;i<this.uncompletedList.length;i++){
                            if(this.uncompletedList[i].parentId === item.id){
                                   this.uncompletedList.splice(i, 1);
                            }
                     }*/
                     if(item.id === this.arrList.length){
                         
                          for(var i=0;i<this.uncompletedList.length;i++){
                            if(this.uncompletedList[i].parentId === item.id){
                                   this.uncompletedList.splice(i, 1);
                            }   
                          }
                          this.arrList.splice(index,1);
                     }
                     else{
                          for(var i=0;i<this.uncompletedList.length;i++){
                            if(this.uncompletedList[i].parentId === item.id){
                                   this.uncompletedList.splice(i, 1);
                            }
                        }

                          for(var i=index+1; i<this.arrList.length;i++){
                              for(var j=0;j<this.uncompletedList.length;j++){
                                  if(this.uncompletedList[j].parentId === this.arrList[i].id){
                                        this.uncompletedList[j].parentId -=1;
                                  }
                              }
                              this.arrList[i].id -=1;
                          }
                         this.arrList.splice(index, 1);

                     }
                  
              },
              //保存清单
              save: function(event){
                     if(this.arrtemplate.id === 0){
                            this.arrtemplate.id = this.arrList.length+1;
                            alert("添加成功");
                            this.arrList.push(this.arrtemplate);
                     }
                     //storeitem.additem(this.arrList);
                     this.arrtemplate = { id: 0, arrListname: ''};
                     
              },
              //改变任务完成状态
              changeStatus: function(item, event){
                     item.isfinished = !item.isfinished;
                     if(item.isfinished){
                     if( this.curTask === item.id){
                           // item.id = this.completedList.length+1;
                            //this.completedList.push(item);
                            //storelist.addlist(this.completedList);
                            //this.uncompletedList.splice(this.curTask-1,1);
                            return;
                     }
                     this.curTask = item.id;
                   //  item.id = this.completedList.length+1;
                    // this.completedList.push(item);
                  //  storelist.addlist(this.completedList);
                     //this.uncompletedList.splice(this.curTask-1,1);
                     }
              },
              //显示清单功能
              showList: function( item,event){
                     if( this.curList === item.id){

                            return;
                     }
                     this.curList = item.id;
              },
              //保存新建任务
              savenew: function(event){
                     if( this.inputtask.parentId ===0){
                            this.inputtask.parentId = this.curList;
                            this.inputtask.id = this.uncompletedList.length+1;
                            this.uncompletedList.push(this.inputtask);

                     }
                     storeitem.additem(this.uncompletedList);
                     this.inputtask = { parentId: 0, id: 0, uncompletedname:'', isfinished: false, 
                          ismyDay: false, priority: '', detail: '',detailflag: false,
                          deadline: ''};
              },
              //删除未完成项
              remove: function(item, index){
                     this.uncompletedList.splice(index, 1);
                     //storeitem.removeitem(this.uncompletedList);
                     
              },
              //删除已完成项
              removecompleted: function(item, index){
                     this.completedList.splice(index, 1);
              }

       },
       computed: {
              //动态显示当前清单的任务数量
              listSize: function(){
                     var count=0;
                     for(var i=0;i<this.uncompletedList.length;i++){
                            if(this.curList === this.uncompletedList[i].parentId && this.uncompletedList[i].isfinished === false)
                             count+=1;
                     }
                     return count;
              },
              Newitems() {
                    var _this = this;
                    var Newitems = [];
                    _this.uncompletedList.map(function (item) {
                        if (
                            item.uncompletedname.search(_this.searchData) != -1
                        ) {
                            Newitems.push(item);
                        }
                    });
                    return Newitems;
                },
                myDay(){
                     var myDay= [];
                     for(var i=0;i<this.uncompletedList.length;i++){
                            if(this.uncompletedList[i].ismyDay){
                                   myDay.push(this.uncompletedList[i]);
                            }
                     }
                     return myDay;
                },
                completedList(){
                    var completedList = [];
                    for(var i=0;i<this.uncompletedList.length;i++){
                          if(this.uncompletedList[i].isfinished){
                                completedList.push(this.uncompletedList[i]);
                          }
                    }
                    return completedList;
                }
            
       },
       //本地保存数据
       watch: {
             arrList: {
                     handler: function(uncompletedList){
                            Store1.save(uncompletedList);
                     },
                     deep: true
              },
            uncompletedList  : {
                      handler: function(uncompletedList){
                            storeitem.additem(uncompletedList);
                      },
                      deep: true
              }/*,
              completedList: {
                     handler: function(completedList){
                            storelist.addlist(completedList);
                     },
                     deep: true
              }*/
       }

}
</script>

<style>
.finished{
       
       text-decoration: underline;
}
/*div{
       margin-top:10px;
}*/
body{
     /*  padding-top: 38px;
*/
}
.outer{
       //background-color: rgba(39, 40, 34, 0.7);
       height:888px;

}
.outer .container{
       background-color: rgba(144,144,138, 0.5);
       margin-top: 0px;

}
.list-group{
       margin-top: 100px;


}
.list-group .list-group-item{
       background: rgba(144, 144, 138, 0.5);
       font-size: 20px;
       border:1px solid #a1a1a1;
       /*margin-top: 10px;*/
}
.list-group-item .form-group{
       padding-top: 10px;
}
/*.list-group-item .form-group {
       padding-top: 10px;
}


.newlist{
       text-align: center;
}*/
.inactive{
       text-decoration: line-through;
}
.active{
       background-color: red;
}
.badge{
       background-color: rgba(217, 83, 79, 0.7);
}
</style>
