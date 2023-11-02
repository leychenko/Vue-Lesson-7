<template>
	<div v-if="cartList.length" class="container">
		<h3 class="subTitle">Корзина :</h3>
	    	<div v-for="(product,index) in cartList" :key="product.id" class="item">
		        <div class="item__body">
		            <div class="item__title">{{product.title}}</div>
		            <div class="item__price">{{product.price}} {{product.currency}}</div>
		        </div>
		        <button type="button" class="button" @click="deleteProductFromCart({product,index})" >Видалити</button>
		    </div>
			 <div class="bild">
			 	<div class="total">Всього до сплати : <span>{{displayPrice}} {{productList.currency}}</span></div>
				 <button type="button" class="button button_total" >Сплатити</button>
			 </div>
	</div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';
	export default {
		name:'CartProducts',
		computed: {
			...mapGetters(['cartList','getTotalPrice','productList','dollarRate','selectedCurrency']),
			displayPrice(){
			   return (this.getTotalPrice).toFixed(2)
			},
			isDollar(){
				return this.selectedCurrency
			}

		},
		methods: {
			...mapActions(['deleteProductFromCart']),
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
			// .button_total
		&_total {
			background-color: #db6532d0;
		}
}
.subTitle{
	font-size: 25px;
	font-weight: 700;
}
.bild{
	display: grid;
	grid-template-columns: 1fr repeat(2,auto);
}
.total {
	padding: 10px;
	display: flex;
	justify-content: space-between;
	font-size: 22px;
	font-weight: 900;
	color: #b20202;
	text-decoration: underline
		// .total__price
		&__price {
font-size: 22px;
font-weight: 900;
	color: #9b493a;
		}
}



</style>