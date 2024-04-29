<template>
  <div class="cart">
    <div class="container m-auto">
      <section class="py-16 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2
            class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black"
          >
            Shopping Cart
          </h2>
          <div class="hidden lg:grid grid-cols-2 py-6">
            <div class="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <p
              class="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between"
            >
              <span class="w-full max-w-[200px] text-center"
                >Quantity</span
              >
              <span class="w-full max-w-[260px] text-center">Total</span>
              <span class="w-full max-w-[200px] text-center">Remove</span>
            </p>
          </div>

          <div
            class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
          >
            <div
              class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
            >
              <div class="img-box">
                <img
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  class="xl:w-[140px]"
                />
              </div>
              <div class="pro-data w-full max-w-sm">
                <h5
                  class="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
                >
                  Latest N-5 Perfuam
                </h5>
                <p
                  class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center"
                >
                  Perfumes
                </p>
                <h6
                  class="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center"
                >
                  $120.00
                </h6>
              </div>
            </div>
            <div
              class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2"
            >
            
              <div
                class="flex items-center w-full mx-auto justify-center gap-4"
              >
                <button
                  class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                >
                  <svg
                    class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 9.5H13.5"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="number"
                  class="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
                  placeholder="2"
                />
                <button
                  class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                >
                  <svg
                    class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 9.5H14.25M9 14.75V4.25"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <h6
                class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center"
              >
                $15.00
                <span
                  class="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap"
                  >(Delivery Charge)</span
                >
              </h6>
              <h6
                class="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center"
              >
                $120.00
              </h6>
            </div>
          </div>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
          >
            <div
              class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
            >
              <div class="img-box">
                <img
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  class="xl:w-[140px]"
                />
              </div>
              <div class="pro-data w-full max-w-sm">
                <h5
                  class="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
                >
                  Latest N-5 Perfuam
                </h5>
                <p
                  class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center"
                >
                  Perfumes
                </p>
                <h6
                  class="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center"
                >
                  $120.00
                </h6>
              </div>
            </div>
            <div
              class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2"
            >
            
              <div
                class="flex items-center w-full mx-auto justify-center gap-4"
              >
                <button
                  class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                >
                  <svg
                    class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 9.5H13.5"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="number"
                  class="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
                  placeholder="2"
                />
                <button
                  class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                >
                  <svg
                    class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 9.5H14.25M9 14.75V4.25"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <h6
                class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center"
              >
                $15.00
                <span
                  class="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap"
                  >(Delivery Charge)</span
                >
              </h6>
              <h6
                class="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center"
              >
                $120.00
              </h6>
            </div>
          </div>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
          >
            <div
              class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto"
            >
              <div class="img-box">
                <img
                  src="https://pagedone.io/asset/uploads/1701162850.png"
                  alt="perfume bottle image"
                  class="xl:w-[140px]"
                />
              </div>
              <div class="pro-data w-full max-w-sm">
                <h5
                  class="font-semibold text-xl leading-8 text-black max-[550px]:text-center"
                >
                  Latest N-5 Perfuam
                </h5>
                <p
                  class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center"
                >
                  Perfumes
                </p>
                <h6
                  class="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center"
                >
                  $120.00
                </h6>
              </div>
            </div>
            <div
              class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2"
            >
            
              <div
                class="flex items-center w-full mx-auto justify-center gap-4"
              >
                <button
                  class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                >
                  <svg
                    class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 9.5H13.5"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="number"
                  class="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
                  placeholder="2"
                />
                <button
                  class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                >
                  <svg
                    class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 9.5H14.25M9 14.75V4.25"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <h6
                class="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center"
              >
                $15.00
                <span
                  class="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap"
                  >(Delivery Charge)</span
                >
              </h6>
              <h6
                class="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center"
              >
                $120.00
              </h6>
            </div>
          </div>
         
          <!-- <div class="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                <div class="flex items-center justify-between w-full mb-6">
                    <p class="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                    <h6 class="font-semibold text-xl leading-8 text-gray-900">$360.00</h6>
                </div>
                <div class="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p class="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                    <h6 class="font-semibold text-xl leading-8 text-gray-900">$45.00</h6>
                </div>
                <div class="flex items-center justify-between w-full py-6">
                    <p class="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                    <h6 class="font-manrope font-medium text-2xl leading-9 text-indigo-500">$405.00</h6>
                </div>
            </div>
            <div class="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    class="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                    <span class="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button
                    class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
                    to Payment
                    <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                        fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div> -->
        </div>
      </section>

      <div class="title font-bold text-center text-2xl">
        <h3>Before you checkout, have you considered...</h3>
      </div>

      <div class="mt-4 mb-5 grid grid-cols-5 gap-4">
        <div
          v-for="(ring, index) in rings"
          :key="index"
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
              <p class="text-xl tracking-tight text-gray-800 dark:text-white">
                {{ ring.desc }}
              </p>
            </RouterLink>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900 dark:text-white"
                >${{ ring.price }}</span
              >
              <a
                href="#"
                class="font-medium text-sm px-5 py-2.5 text-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-gray-900"
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
  {
    title: "Dimond",
    desc: "Dimond Tradition Gold Bracelet",
    price: "300 ",
    image: "https://kisna.com/cdn/shop/files/W10028-Y-1_480x.jpg?v=1684836802",
  },
  {
    title: "Dimond",
    desc: "Dimond Tradition Gold Bracelet",
    price: "300 ",
    image: "https://kisna.com/cdn/shop/files/WG10012-Y-1_480x.jpg?v=1693888485",
  },
  {
    title: "Acacia Ring",
    desc: "Dimond Tradition Gold Bracelet",
    price: "300 ",
    image: "https://kisna.com/cdn/shop/files/W11064-_3_480x.jpg?v=1690536483",
  },
  {
    title: "Annalise Ring",
    desc: "Dimond Tradition Gold Bracelet",
    price: "300 ",
    image: "https://kisna.com/cdn/shop/files/WG10011-Y-1_480x.jpg?v=1693549528",
  },
  {
    title: "Dimond",
    desc: "Dimond Tradition Gold Bracelet",
    price: "300 ",
    image: "https://kisna.com/cdn/shop/files/W10559-_3_480x.jpg?v=1684930254",
  },
];
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
