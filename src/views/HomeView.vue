<script setup>
import TheSlider from "../components/TheSlider.vue";
</script>

<template>
  <main>
    <TheSlider />

    <section class="bg-white">
      <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full"
        >
          <div
            class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col"
          >
            <a
              href=""
              class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="https://res.cloudinary.com/kendra-scott/image/upload/e_sharpen:90/q_auto,f_auto,dpr_auto/v1713988552/homepage-imageuploader/Spring%203%20%2B%20Mother%27s%20Day%202024/Rectangle_1_61.jpg"
                alt=""
                class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div
                class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
              ></div>
              <h3
                class="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl"
              >
                Under 2,000$
              </h3>
            </a>
          </div>
          <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <a
              href=""
              class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
            >
              <img
                src="https://kisna.com/cdn/shop/files/2_efa68622-ae10-41b9-8cc2-1e4d73549986_1024x.jpg?v=1713358079"
                alt=""
                class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div
                class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
              ></div>
              <h3
                class="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl"
              >
                Under 6,000$
              </h3>
            </a>
            <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="https://www.vibella.com/cdn/shop/products/Uranise_460x.jpg?v=1623693844"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
                ></div>
                <h3
                  class="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl"
                >
                  Under 12,000$
                </h3>
              </a>
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="https://res.cloudinary.com/kendra-scott/image/upload/e_sharpen:80/q_auto,f_auto,dpr_auto/v1711577535/homepage-imageuploader/Spring%203%20%2B%20Mother%27s%20Day%202024/rings_webflat.jpg"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
                ></div>
                <h3
                  class="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl"
                >
                  Under 8,000$
                </h3>
              </a>
            </div>
          </div>
          <div
            class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col"
          >
            <a
              href=""
              class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src="https://kisna.com/cdn/shop/files/W10294-Y-1_1800x1800_97e67197-4a23-40ae-9267-b2c6f04f553a_400x.webp?v=1703142436"
                alt=""
                class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div
                class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"
              ></div>
              <h3
                class="z-10 text-xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-2xl"
              >
                Under 22,000$
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="container m-auto">
      <div class="title font-bold text-center text-2xl">
        <h3>Shop Category</h3>
      </div>
      <div class="test mt-4 mb-5 grid grid-cols-5">
        <div class="image">
          <img
            class="w-[100%] h-auto max-w-full"
            src="https://images-aka.kayoutlet.com/kayoutlet/homepage/FY23/6.21/ko_WMJ-23-007590_trigger_engagement.jpg"
            alt="image description"
          />
        </div>
        <div class="image">
          <img
            class="w-[100%] h-auto max-w-full"
            src="https://images-aka.kayoutlet.com/kayoutlet/homepage/FY23/6.21/ko_WMJ-23-007590_trigger_earrings.jpg"
            alt="image description"
          />
        </div>
        <div class="image">
          <img
            class="w-[100%] h-auto max-w-full"
            src="https://images-aka.kayoutlet.com/kayoutlet/homepage/FY23/6.21/ko_WMJ-23-007590_trigger_wedding.jpg"
            alt="image description"
          />
        </div>
        <div class="image">
          <img
            class="w-[100%] h-auto max-w-full"
            src="https://images-aka.kayoutlet.com/kayoutlet/homepage/FY23/6.21/ko_WMJ-23-007590_trigger_necklaces.jpg"
            alt="image description"
          />
        </div>
        <div class="image">
          <img
            class="w-[100%] h-auto max-w-full"
            src="https://images-aka.kayoutlet.com/kayoutlet/homepage/FY23/6.23/trigger_rings.jpg"
            alt="image description"
          />
        </div>
      </div>
      <div class="mt-4 mb-5 grid grid-cols-2 gap-4">
        <div class="image">
          <img
            class="w-[100%] h-80 max-w-full"
            src="@/assets/images/image3.jpg"
            alt="image description"
          />
          <div class="py-4 text-center font-bold">
            <h2>30% OFF</h2>
          </div>
        </div>
        <div class="image">
          <img
            class="w-[100%] h-80 max-w-full"
            src="@/assets/images/image4.jpg"
            alt="image description"
          />
          <div class="py-4 text-center font-bold">
            <h2>40% OFF</h2>
          </div>
        </div>
      </div>

      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="text-center">
              <h2
                class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Empowering Businesses Globally
              </h2>
              <p class="mt-4 text-lg leading-8 text-gray-600">
                Our platform is trusted by organizations worldwide to boost
                productivity, streamline operations, and enhance customer
                experiences.
              </p>
            </div>
            <dl
              class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
            >
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-600">
                  Active Users
                </dt>
                <dd
                  class="order-first text-3xl font-semibold tracking-tight text-gray-900"
                >
                  12,345
                </dd>
              </div>
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-600">
                  Transactions Today
                </dt>
                <dd
                  class="order-first text-3xl font-semibold tracking-tight text-gray-900"
                >
                  1.23M
                </dd>
              </div>
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-600">
                  Total Revenue
                </dt>
                <dd
                  class="order-first text-3xl font-semibold tracking-tight text-gray-900"
                >
                  $5.6B
                </dd>
              </div>
              <div class="flex flex-col bg-gray-200/50 p-8">
                <dt class="text-sm font-semibold leading-6 text-gray-600">
                  Happy Customers
                </dt>
                <dd
                  class="order-first text-3xl font-semibold tracking-tight text-gray-900"
                >
                  98%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <!-- Best seller -->
      <div class="title font-bold text-2xl text-center">
        <h3>Best Seller</h3>
      </div>
      <div class="test mt-4 mb-5 grid grid-cols-5 gap-4">
        <div class="card">
          <div class="image">
            <img
              class="w-[100%] h-auto max-w-full"
              src="@/assets/images/rectangle1.png"
              alt="image description"
            />
          </div>
          <div class="text-content py-2">
            <div class="title text-center py-2">
              <h3>Ring</h3>
            </div>
            <button
              class="focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-gray-900 py-2 px-4 flex mx-auto"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img
              class="w-[100%] h-auto max-w-full"
              src="@/assets/images/rectangle2.png"
              alt="image description"
            />
          </div>
          <div class="text-content py-2">
            <div class="title text-center py-2">
              <h3>Ring</h3>
            </div>
            <button
              class="focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-gray-900 py-2 px-4 flex mx-auto"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img
              class="w-[100%] h-auto max-w-full"
              src="@/assets/images/rectangle3.png"
              alt="image description"
            />
          </div>
          <div class="text-content py-2">
            <div class="title text-center py-2">
              <h3>Ring</h3>
            </div>
            <button
              class="focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-gray-900 py-2 px-4 flex mx-auto"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img
              class="w-[100%] h-auto max-w-full"
              src="@/assets/images/rectangle4.png"
              alt="image description"
            />
          </div>
          <div class="text-content py-2">
            <div class="title text-center py-2">
              <h3>Ring</h3>
            </div>
            <button
              class="focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-gray-900 py-2 px-4 flex mx-auto"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img
              class="w-[100%] h-auto max-w-full"
              src="@/assets/images/rectangle5.png"
              alt="image description"
            />
          </div>
          <div class="text-content py-2">
            <div class="title text-center py-2">
              <h3>Ring</h3>
            </div>
            <button
              class="focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-gray-900 py-2 px-4 flex mx-auto"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
