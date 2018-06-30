<template>
	<div id="app">
	   <div class="container">

	     <div class="col-md-4 col-md-offset-4 ">
		<div class="list-group ">
			<div class="list-group-item">
				<label for="username">用户名</label>
				<input type="text" class="form-control" placeholder="请输入用户名" id="username">
			<!--</div>
			<div class="list-group-item">-->
				<label for="password">密码</label>
				<input type="text" class="form-control"  id="password">
				<p></p>
			<button type="button" class="btn btn-lg btn-danger btn-block" @click="login">登录</button>
			
			<button class="btn btn-info btn-block register" data-toggle="modal" data-target="#newuser">注册</button>
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
								  <input type="text" class="form-control" id="tempusername" >
							</div>
							<div class="form-group">
							     <label for="password" >密 码</label>
							     <input type="password" class="form-control" id="temppassword">
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
			</div>
		</div>

        </div>

		</div>
		
	</div>
</template>

<script>
  
	export default {
		name: 'login',
		/*data: function(){
			return {
				users: Store.fetch(),
				usertemplate: { username: '', password: ''},
				inputusr: { username: '', password: ''	}
			}
		},*/
	  methods: {
	 	login: function(){
	 		var flag = false;
	 		var usrname = document.getElementById('username').value;
	 		var password = localStorage.getItem(usrname);
	 		var  pwd = document.getElementById('password').value;
	 		if( pwd === password)
	 			flag = true;
	 		if( flag ===false) 
	 		alert('请输入正确的用户名和密码');
	 		else{
	 			this.$router.push({ path: '/Home'});
	 			alert('登陆成功');
	 		}


	 		//this.inputusr={ username: '', password: ''};
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
	 		
	 		var tempusername=document.getElementById('tempusername').value;
	 		var temppassword = document.getElementById('temppassword').value;
	 		if(localStorage.getItem(tempusername))
	 			alert('该用户名已存在');
	 		else{
			localStorage.setItem(tempusername, temppassword); 		
	 	    alert('注册成功');
	 	    }
	 	    document.getElementById('tempusername').value = '';
	 	    document.getElementById('temppassword').value = '';
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
	   padding-bottom: 50px;
	   border-radius: 15px;
	   background-color: rgba(144,144,138, 0.5);
	}
	p{
		height: 20px;
	}
	.list-group{
       margin-top:150px;
       border: 0px;


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
