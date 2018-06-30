<template>
	<div>
	   <datepicker v-model="date"></datepicker>
	</div>
</template>

<script>
	import datepicker from 'vue-date'
	export default {
		data() {
			return {
				date: '2018-6-17'
			}
		},
		components: {datepicker}
	}
</script>

<style>

</style>
<label for="des_year">年</label>
       				  						<select name="des_year" id="des_year" class="form-control" >
       				  							<option value="des_year" v-model="inputtask.des_year"></option>
       				  						</select>
       				  						<!--<input type="text" name="des_year" id="des_year" class="form-control" v-model="inputtask.des_year">-->
       				  						<label for="des_month">月</label>
       				  						<!--<input type="text" name="des_month" id="des_month" class="form-control" v-model="inputtask.des_month">-->
       				  						<select name="des_month" id="des_month" class="form-control" >
       				  							<option value="des_month" v-model="inputtask.des_month"></option>
       				  						</select>
       				  						<label for="des_day">日</label>
       				  						<!--<input type="text" name="des_day" id="des_day" class="form-control" v-model="inputtask.des_day">-->
       				  						<select name="des_day" id="des_day" class="form-control" >
       				  							<option value="des_day" v-model="inputtask.des_day"></option>
       				  						</select>