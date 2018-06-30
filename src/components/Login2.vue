<template>
	<div id="app">
	   <div class="container">

	     <div class="col-md-6 col-md-offset-3">
	   
		<form class="form-horizonal login">
		<div class="form-group form-inline">
		    <label for="username" class="col-md-4 control-label">用户名</label>
		   
			<input type="text" class="  col-md-6" v-model="inputusr.username"
			id="username" >
			
		</div>
		<div class="form-group form-inline">
			<label for="password" class="col-md-4 control-label">密 码</label>
		
			 <input type="password" class=" col-md-6" v-model="inputusr.password"
			 id="password">
		
		</div>
			<br/>
			<button class="btn btn-danger btn-block" @click="login">登录</button>
			<button class="btn btn-info btn-block" data-toggle="modal" data-target="#newuser">注册</button>
			<div class="modal fade" id="newuser" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
								&times;
							</button>
							<h4 class="modal-title" id="myModalLabel" >
								注册用户
							</h4>
						</div>
						<div class="modal-body">		
							<div class="form-group">
		  						  <label for="username" >用户名</label>
								  <input type="text" class="form-control" id="tempusername" v-model="usertemplate.username">
							</div>
							<div class="form-group">
							     <label for="password" >密 码</label>
							     <input type="password" class="form-control" id="temppassword" 
							     v-model="usertemplate.password">
							</div>
						  
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-sm btn-default" data-dismiss="modal">
								关闭
							</button>
							<button type="button" class="btn btn-sm btn-info"  data-dismiss="modal" @click="register">
							注册
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
		
        </div>

		</div>
		
	</div>
</template>

<script>
    import Store from '../store'
	export default {
		name: 'login',
		data: function(){
			return {
				users: Store.fetch(),
				usertemplate: { username: '', password: ''},
				inputusr: { username: '', password: ''	}
			}
		},
	  methods: {
	 	login: function(){
	 	    var flag = false;
	 		for(var i=0; i<this.users.length; i++){
	 			if( this.inputusr.username === this.users[i].username && this.inputusr.password === this.users[i].password){
	 				this.$router.push({
	 		  		path: '/Home' });
	 		  		this.inputusr={ username: '', password: ''};
	 		  		flag = true;
	 		  		alert('登录成功');
	 		  		break;
	 			}
	 		}
	 		if( flag ===false) alert('请输入正确的用户名和密码');
	 		this.inputusr={ username: '', password: ''};
	 		/*if(this.username !=='sangjunyi'||this.password!=='123456'){
	 			alert('用户名或密码输入错误');
	 			this.username = '';
	 			this.password = '';
	 		}
	 		else
	 		  {
	 		  	this.$router.push({
	 		  		path: '/Home'
	 		  	});

	 		  }
	 		  this.username = '';
	 		 this.password = '';*/

	 	},
	 	register: function(){
	 		var flag = 0;
	 		for(var i=0;i<this.users.length;i++){
	 			if( this.usertemplate.username === this.users[i].username){
	 				alert('该用户账号已存在');
	 				//this.usertemplate={ username: '', password: ''};
	 				break;
	 			}
	 			else{ flag+=1;}
	 		}
	 		if(flag === this.users.length){
	 		    this.users.push(this.usertemplate);
	 		    alert('注册成功');
	 		}
	 		this.usertemplate = { username: '', password: ''};
	 	}
	  },
	  watch: {
	  	 users: {
                     handler: function(users){
                            Store.save(users);
                     },
                     deep: true
              }
	  }
	}

</script>
<style>
	form{
	background: rgba(255,255,255,0.4);
	margin-top:200px;
	padding-top:50px;
	padding-bottom:30px;


	}
	.login{
	   padding-bottom: 30px;
	   border-radius: 5px;


	}
	/*button {
	margin-top:80px;
	}
	input{
	   margin-top:20px;
	}
	label{
		margin-top:20px;
	}*/


</style>