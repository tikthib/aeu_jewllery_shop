<template>
  <div class="banner mb-5">
    <img
      class="w-[100%] h-auto max-w-full"
      src="@/assets/images/ring/banner.png"
      alt="image description"
    />
  </div>
  <div class="about">
    <div class="container m-auto">
      <div  class="mt-4 mb-5 grid grid-cols-5 gap-4">
        
        <div v-for="(ring,index) in rings" :key="index"
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200"
        >
          <a href="/ring-detail">
            <img
              class="h-72 p-1 rounded-t-lg"
              :src="ring.image"
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <RouterLink to="/ring-detail">
              <h5
                class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
              >
               
                {{ ring.title }}
              </h5>
              <p
                class="text-xl  tracking-tight text-gray-800 dark:text-white"
              >
               
                {{ ring.desc }}
            </p>
            </RouterLink>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900 dark:text-white"
                >${{ ring.price }}</span
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
 const rings = [
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W10028-Y-1_480x.jpg?v=1684836802'},
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/WG10012-Y-1_480x.jpg?v=1693888485'},
  {title:'Acacia Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W11064-_3_480x.jpg?v=1690536483'},
  {title:'Annalise Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/WG10011-Y-1_480x.jpg?v=1693549528'},
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W10559-_3_480x.jpg?v=1684930254'},
  {title:'Acacia Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/products/W10452-Y-1_480x.jpg?v=1675751902'},
  {title:'Pari Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFLR10580-Y-1_480x.jpg?v=1688111024'},
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFLR10180-Y-1_480x.jpg?v=1689250878'},
  {title:'Annalise Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/WG10011-Y-1_480x.jpg?v=1693549528'},
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W10559-_3_480x.jpg?v=1684930254'},
  {title:'Acacia Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/products/W10452-Y-1_480x.jpg?v=1675751902'},
  {title:'Pari Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFLR10580-Y-1_480x.jpg?v=1688111024'},
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFLR10180-Y-1_480x.jpg?v=1689250878'},
  {title:'Acacia Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W11064-_3_480x.jpg?v=1690536483'},
  {title:'Annalise Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/WG10011-Y-1_480x.jpg?v=1693549528'},
  {title:'Dimond',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/W10559-_3_480x.jpg?v=1684930254'},
  {title:'Acacia Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/products/W10452-Y-1_480x.jpg?v=1675751902'},
  {title:'Pari Ring',desc:'Dimond Tradition Gold Bracelet',price:'300 ',image:'https://kisna.com/cdn/shop/files/KFLR10580-Y-1_480x.jpg?v=1688111024'},

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
