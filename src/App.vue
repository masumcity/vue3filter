<script setup></script>

<template>
  <div class="container mx-auto">
    <NavBar />
    <h1 class="text-red-600 text-2xl p-6 text-center">IP Phone Search</h1>
    <form class="flex items-center mx-0">
      <div class="relative w-full">
        <div class="absolute flex pl-3 pt-2.5 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <div class="flex justify-left">
          <div class="mb-3 w-full">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
              <input type="search"
                class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 pl-10"
                v-model="search" required placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
              <button
                class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                type="button" id="button-addon3" data-te-ripple-init>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" class="px-6 py-4"> # </th>
                  <th scope="col" class="px-6 py-4"> Name </th>
                  <th scope="col" class="px-6 py-4"> Branchs </th>
                  <th scope="col" class="px-6 py-4"> Extrnsion </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(list, index) in filtereds.sort((a, b) => (a.branch > b.branch) ? 1 : -1)" :key="index"
                  class="border-b dark:border-neutral-500 hover:bg-gray-800 hover:text-gray-100"
                  :class="[index % 2 === 0 ? 'bg-neutral-100 dark:bg-neutral-700' : 'bg-white dark:bg-neutral-600']" >
                  <td class="whitespace-nowrap px-6 py-4 font-medium"> {{ index + 1 }} </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ list.name }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ list.branch }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ list.ext }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import lists from "../src/data/extension.json";
import Card from '../src/components/Card.vue';
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      jsonlists: [],
      search: "",
    };
  },

  components: {
    Card,
    NavBar,
    Footer
  },

  mounted() {
    this.jsonlists = lists;
  },

  computed: {
    filtereds() {
      const search = this.search.toLowerCase();
      return this.jsonlists.filter(
        (list) =>
          typeof list.name === "string" &&
          list.name.toLowerCase().includes(search)
      );
    },
  },
};
</script>
