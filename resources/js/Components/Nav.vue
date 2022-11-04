<template>
    <div class="bg-amber-500">
        <div class="max-w-screen-xl mx-auto">
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
                <ul class="hidden md:flex space-x-12">
                    <li>
                        <Link class="text-white font-bold hover:text-blue-900 text-lg" href="/sobre">Sobre</Link>
                    </li>
                    <li class="">
                        <Link class="text-white font-bold hover:text-blue-900 text-lg" href="/modalidades">Modalidades
                        </Link>
                    </li>
                    <li class="">
                        <a href="#" class="text-white font-bold hover:text-blue-900 text-lg">Mídia</a>
                    </li>
                    <li class="">
                        <a href="#" class="text-white font-bold hover:text-blue-900 text-lg">Área dos Calouros</a>
                    </li>
                    <li class="">
                        <Link class="text-white font-bold hover:text-blue-900 text-lg" href="/contato">Contato
                        </Link>
                    </li>
                </ul>
                <div class="block md:hidden">
                    <span type="button" class="
              p-3
              rounded-full
              bg-amber-600
              hover:bg-amber-700
              transition-all
              ease-out
            "><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"
                            style="fill: #fff">
                            <path
                                d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z">
                            </path>
                        </svg></span>
                </div>
                <div class="hidden md:block space-x-6">
                    <a href="#" class="text-white font-bold hover:text-blue-900 text-lg">Ingressos</a>
                    <a type="button" href="#" class="
              px-6
              py-3
              bg-blue-900
              rounded
              font-bold
              text-gray-100 text-lg
            ">Seja sócio</a>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import logo from "/public/images/logo.png";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link
    },

    data() {
        return {
            logo: logo,
        };
    },
};
</script>
