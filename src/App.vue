<template>
      
        <div id="app">
              <div :class="isActive? 'active1' : 'active2'">
               
                      <router-link to="/Login">
                           
                           登陆

                      </router-link> 
                     <router-view/>
             <button class="btn btn-xs btnposit" @click="change($event)">切换</button>
     
              </div>

       
       </div>
     
</template>

<script>
       export default {
            data: function(){
               return{
                  isActive: 0
               }
            },
             methods: {
               change: function(event){
                   return  this.isActive = !this.isActive;
               }
             }
       }

</script>

<style>
.active1{
     
  
       background-image: url('back5.jpg');
       background-repeat: no-repeat ;
       background-positon: center 0;
       background-size:cover;
       height:1080px;


}
.active2{
     
  
       background-image: url('back4.jpg');
       background-repeat: no-repeat ;
       background-positon: center 0;
       background-size:cover;
       height:1082px;


}
.btnposit{
  position: absolute;
  top:60px;
  background: url('back5.jpg');
}
/*.mybtn{
       width:55px;
       border-radius:15px;
       height:55px;
       margin:auto;
       background: rgba(213,213,213,0.5);
       margin-top:200px;
}*/
</style>
