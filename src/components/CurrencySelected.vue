<template>
	<div>
		<select v-model="currency" @change="changeCurrency">
			<option v-for="item in currencyList" :key="item.id" :value="item.name" class="option">{{item.name}}</option>
		 </select>
	</div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';
	export default {
		name:'CurrencySelected',
		computed: {
			...mapGetters(['currencyList','selectedCurrency']),
			currency:{
				get(){
					return this.selectedCurrency
				},
				set(newCurrency){
					this.chooseCurrency(newCurrency)
				}
			}
		},
		methods: {
			...mapActions(['chooseCurrency','changeCurrency']),
			
		},
	}
</script>

<style lang="scss" scoped>
select{
	border: 2px solid black;
}
.option{
	font-size: 16px;
}
</style>