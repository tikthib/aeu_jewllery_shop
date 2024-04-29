<template>
  <div class="banner mb-5">
    <img
      class="w-[100%] h-auto max-w-full"
      src="@/assets/images/necklace/banner.png"
      alt="image description"
    />
  </div>
  <div class="Necklace">
    <div class="container m-auto">
      <div  class="mt-4 mb-5 grid grid-cols-5 gap-4">
        
        <div v-for="(necklace,index) in necklaces" :key="index"
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200"
        >
          <RouterLink to="/necklace-detail">
            <img
              class="h-72 p-1 rounded-t-lg"
              :src="necklace.image"
              alt="product image"
            />
          </RouterLink>
          <div class="px-5 pb-5">
            <RouterLink to="/necklace-detail">
              <h5
                class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
              >
               
                {{ necklace.title }}
              </h5>
              <p
                class="text-xl  tracking-tight text-gray-800 dark:text-white"
              >
               
                {{ necklace.desc }}
            </p>
            </RouterLink>
          
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900 dark:text-white"
                >${{ necklace.price }}</span
              >
              <a
                href="#"
                class=" font-medium text-sm px-5 py-2.5 text-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-gray-900"
                >Show Now</a
              >
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
 const necklaces = [
  {title:'Valerie Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFPS20097PB-Y-1_480x.jpg?v=1687864828'},
  {title:'Alice Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'//kisna.com/cdn/shop/files/KFPS20022PG-Y-1_480x.jpg?v=1687850264'},
  {title:'Kelci Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'//kisna.com/cdn/shop/files/KFPS20080PB-Y-1_480x.jpg?v=1691132399'},
  {title:'Charlotte Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'//kisna.com/cdn/shop/files/KFPS20015PG-Y-1_480x.jpg?v=1687849463'},
  {title:'Alice Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'//kisna.com/cdn/shop/files/KFPS20020PG-Y-1_480x.jpg?v=1687849731'},
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'//kisna.com/cdn/shop/files/KFPS20021PG-Y-1_480x.jpg?v=1687849876'},
  {title:'Charlotte Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'//kisna.com/cdn/shop/products/W20281-Y-1_480x.jpg?v=1681971119'},
  {title:'Alice Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/products/W20316-Y-1_480x.jpg?v=1680165363'},
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFPS20069P-Y-1_480x.jpg?v=1687859889'},
  {title:'Charlotte Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'//kisna.com/cdn/shop/files/KFPS20020PG-Y-1_480x.jpg?v=1687849731'},
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'//kisna.com/cdn/shop/files/KFPS20021PG-Y-1_480x.jpg?v=1687849876'},
  {title:'Alice Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'//kisna.com/cdn/shop/products/W20281-Y-1_480x.jpg?v=1681971119'},
  {title:'Charlotte Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/products/W20316-Y-1_480x.jpg?v=1680165363'},
  {title:'Alice Pendant',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/products/W20316-Y-1_480x.jpg?v=1680165363'},
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFPS20069P-Y-1_480x.jpg?v=1687859889'},
 
]


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
