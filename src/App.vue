<template>
	<h1 class="title">Вітаємо в нашому магазині !!!</h1>
    <div class="cont">
		<product-item />
		<currency-selected/>
		<cart-products/>
		</div>
		
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import CartProducts from '@/components/CartProducts.vue';
import CurrencySelected from '@/components/CurrencySelected.vue';
export default {
    name: 'App',
    components: {
		ProductItem,
		CurrencySelected,
		CartProducts
    },
    
}
</script>

<style lang="scss">

.cont {
    max-width: 80%;
    display: grid;
	 grid-template-columns: auto auto;
	 gap: 50px;
	 margin: 0 auto;
   
}
.title{
	text-align: center;
	
}
</style>
