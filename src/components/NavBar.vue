<template>
  <nav
    class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
    data-te-navbar-ref>
    <div class="container mx-auto">
      <div class="flex w-full flex-wrap items-center justify-between md:px-6 px-0">
        <button
          class="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button" data-te-collapse-init data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
          <span class="[&>svg]:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
              <path fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
        <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1" data-te-collapse-item>
          <router-link to="/"
            class="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0">
            <img src="/logo.svg" alt="" loading="lazy" class="h-8" />
          </router-link>
          <!-- Left links -->
          <ul class="list-style-none mr-auto flex flex-col md:pl-2 pl-0 lg:flex-row" data-te-navbar-nav-ref>
            <li class="lg:pr-2" data-te-nav-item-ref>
              <router-link to="/"
                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                data-te-nav-link-ref> IP Phone </router-link>
            </li>
            <li class="lg:pr-2" data-te-nav-item-ref>
              <router-link to="/website"
                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="/website" data-te-nav-link-ref> Web Site </router-link>
            </li>
            <li class="lg:pr-2" data-te-nav-item-ref>
              <router-link to="/app"
                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                data-te-nav-link-ref> App </router-link>
            </li>
            <li v-if="login" class="lg:pr-2" data-te-nav-item-ref>
              <router-link to="/admin"
                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                data-te-nav-link-ref> Admin </router-link>
            </li>
            <li v-if="login" class="lg:pr-2" data-te-nav-item-ref>
              <button @click="logout"
                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                data-te-nav-link-ref> Logout </button>
            </li>
            <li v-else class="lg:pr-2" data-te-nav-item-ref>
              <router-link to="/login"
                class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                data-te-nav-link-ref> Login </router-link>
            </li>

          </ul>
          <!-- Left links -->
        </div>
        <!-- Right elements -->
        <div class="relative flex items-center">
          <a class="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#">
            {{ name }}
          </a>
        </div>
        <!-- Collapsible wrapper -->
      </div>
    </div>
  </nav>
</template>

<script>
import router from '@/router';
export default {
  data() {
    return {
      name: localStorage.getItem("name"),
      login: false
    }
  },

  mounted() {
    if (localStorage.getItem('name')) {
      this.name = localStorage.getItem('name');
    }

    this.checkauth();
  },

  methods: {
    checkauth() {
      setInterval(() => {
        if (localStorage.getItem("login") == "true") {
          const name = localStorage.getItem("name");
          this.name = name;
          this.login = true;
        }
      }, 1000);
    },

    logout() {
      this.login = false;
      localStorage.removeItem('name');
      localStorage.removeItem('login');
      router.push('/login');
    }
  }

}
</script>