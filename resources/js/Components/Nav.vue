<template>
  <div class="bg-amber-500">
    <div class="max-w-screen-xl mx-auto relative">
      <nav class="
          flex
          items-center
          justify-between
          px-4
          py-4
          md:py-6
          border-b border-amber-600
        ">
        <div>
          <Link href="/"><img :src="logo" alt="Escudo dos Sistemáticos" class="w-16 h-16 md:w-28 md:h-28" />
          </Link>
        </div>
        <ul class="hidden lg:flex space-x-12">
          <li>
            <Link class="text-white font-bold hover:text-blue-900 text-lg" href="/sobre">Sobre</Link>
          </li>
          <li class="">
            <Link class="text-white font-bold hover:text-blue-900 text-lg" href="/modalidades">Modalidades
            </Link>
          </li>
          <li class="">
            <Link href="/midia" class="text-white font-bold hover:text-blue-900 text-lg">Mídia</Link>
          </li>
          <li class="">
            <Link href="/calouros" class="text-white font-bold hover:text-blue-900 text-lg">Área dos calouros</Link>
          </li>
          <li class="">
            <Link class="text-white font-bold hover:text-blue-900 text-lg" href="/contato">Contato
            </Link>
          </li>
        </ul>
        <div class="block lg:hidden">
          <span type="button" @click="toggleMenu = !toggleMenu" class="
              p-3
              rounded-full
              bg-amber-600
              hover:bg-amber-700
              transition-all
              ease-out
            "><svg xmlns="https://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
              style="fill: #fff">
              <path
                d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z">
              </path>
            </svg></span>
        </div>
        <div class="hidden lg:block space-x-6">
          <a href="#" class="
              text-white
              font-bold
              hover:text-blue-900
              text-lg
              hidden
              xl:inline-flex
            ">Ingressos</a>
          <button @click="alerta" class="
            px-6
                py-3
                bg-blue-800
                hover:bg-blue-700 hover:text-white
                transition-all
                ease-out
                rounded-xl
                font-bold
                text-gray-50 text-lg
                mr-6 mb-4 md:mb-0
                border-2 border-amber-500
                hover:ring-2 ring-blue-800
            ">Seja sócio</button>
        </div>
      </nav>
    </div>
    <div v-if="toggleMenu" class="absolute left-0 right-0 lg:hidden z-10 shadow-2xl">
      <div class="bg-amber-500 w-full">
        <ul v-auto-animate class="w-full">
          <li>
            <Link type="button" class="
                text-white
                font-bold
                hover:text-blue-900
                text-lg
                border-b border-amber-600
                p-6
                w-full
                focus:bg-amber-600
              " href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link type="button" class="
                text-white
                font-bold
                hover:text-blue-900
                text-lg
                border-b border-amber-600
                p-6
                w-full
                focus:bg-amber-600
              " href="/modalidades">Modalidades
            </Link>
          </li>
          <li>
            <Link type="button" href="/midia" class="
                text-white
                font-bold
                hover:text-blue-900
                text-lg
                border-b border-amber-600
                p-6
                w-full
                focus:bg-amber-600
              ">
            Mídia</Link>
          </li>
          <li>
            <Link type="button" href="/calouros" class="
                text-white
                font-bold
                hover:text-blue-900
                text-lg
                border-b border-amber-600
                p-6
                w-full
                focus:bg-amber-600
              ">
            Área dos Calouros</Link>
          </li>
          <li>
            <Link type="button" class="
                text-white
                font-bold
                hover:text-blue-900
                text-lg
                border-b border-amber-600
                p-6
                w-full
                focus:bg-amber-600
              " href="/contato">Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "/public/images/logo.png";
import { Link } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Link,
  },

  data() {
    return {
      logo: logo,
      toggleMenu: false,
    };
  },

  methods: {
    alerta() {
      alert('Disponível em breve!')
    }
  }
};
</script>
