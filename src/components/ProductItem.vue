<template>
    <div class="container">
		<h3 class="subTitle">{{getTitle}} :</h3>
    	<div v-for="(product,index) in productList" :key="product.id" class="item">
	        <div class="item__body">
	            <div class="item__title">{{product.title}}</div>
	            <div class="item__price">{{product.price}} {{product.currency}}</div>
	        </div>
	        <button @click="addProductToCart({product,index})" type="button" class="button">Купити</button>
	    </div>
		
    </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';

export default {
    name: 'ProductItem',
	
	 computed: {
		...mapGetters(['productList','currencyList','getTitle'])
	 },
	 methods: {
		...mapActions(['chooseProduct']),

		addProductToCart({product,index}){
			this.chooseProduct({product,index})
		}
	 },
}
</script>

<style lang="scss" scoped>
.container{
	display: grid;
	gap: 20px;
	padding: 20px;
	border: 2px solid black;
	
}
.item {
	display: grid;
	grid-template-columns: 1fr auto;
	justify-content: space-between;
	font-weight: 700;
		// .item__body
		&__body {
			display: grid;
			grid-template-columns: 1fr 100px;
			align-items: center;
			
		}
		// .item__title
		&__title {
			font-size: 20px;
		
		}
		// .item__price
		&__price {
			font-size: 20px;
			color: rgb(10, 8, 8);
		}
}
.button {
	font-size: 17px;
	font-weight: 700;
	padding: 5px 15px;
	align-self: center;
	margin-left: 5px;
	background-color: #92d76e;
	border-radius: 5px;
}
.subTitle{
	font-size: 25px;
	font-weight: 700;
}

</style>
