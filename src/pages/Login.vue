<template>
  <section class="gradient-form h-full container mx-auto">
    <div class="container h-full p-10">
      <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div class="w-full">
          <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div class="g-0 lg:flex lg:flex-wrap">
              <div class="px-4 md:px-0 lg:w-6/12">
                <div class="md:mx-6 md:p-12">
                  <div class="text-center">
                    <img class="mx-auto w-48"
                      src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                    <h4 class="mt-1 mb-12 pb-1 text-xl font-semibold">
                      Only For Admin
                    </h4>
                  </div>
                  <form @submit.prevent="login">
                    <p class="mb-4">Please login to your account</p>
                    <div class="relative mb-4">
                      <input type="text"
                        class="peer block min-h-[auto] w-full rounded border py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1" placeholder="Username" v-model="username" />
                    </div>
                    <div class="relative mb-4">
                      <input type="password"
                        class="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput11" placeholder="Password" v-model="password" />
                    </div>
                    <div class="mb-12 pt-1 pb-1 text-center">
                      <button type="submit"
                        class="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);">
                        Log in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)">
                <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 class="mb-6 text-xl font-semibold">
                    We are more than just a company
                  </h4>
                  <p class="text-sm">
                    Computer City Technologies Ltd is one of the largest ICT hardware distribution company as well as a
                    solution provider in network and security space in Bangladesh. CCTL has been operating in Bangladesh
                    ICT industry since 1999. Responding to the ICT needs of the country, CCTL was established with the
                    goal to keep our generation updated with latest technology while assisting to secure the fastest
                    access to the digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import admin from '../data/admin.json';
import router from '@/router';
export default {
  data() {
    return {
      admins: [],
      username: '',
      password: ''
    }
  },

  mounted() {
    this.admins = admin;
  },

  methods: {
    login() {
      const user = this.admins.filter((admin) => {
        return admin.username == this.username && admin.password == this.password;
      }).pop();
      if (user) {
        localStorage.setItem('name', user.name);
        localStorage.setItem('login', true);
        router.push('/admin');
      } else {
        alert('Incorrect Username and password');
      }
    }
  }
}
</script>