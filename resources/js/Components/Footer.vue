<template>
    <div class="bg-blue-900">
        <div class="max-w-screen-xl mx-auto">
            <section id="footer">
                <div class="
            flex flex-col
            md:flex-row
            items-center
            justify-between
            py-6
            px-4
          ">
                    <div>
                        <Link href="/"><img :src="logo" alt="Escudo dos Sistemáticos" class="w-28 h-28" /></Link>
                    </div>
                    <div>
                        <a type="button" href="#" class="
                font-bold
                text-white text-lg
                bg-blue-800
                hover:bg-blue-700
                transition-all
                ease-out
                px-4
                py-2
                mt-4
                md:mt-0
                rounded-lg
              ">Seja sócio</a>
                    </div>
                </div>
                <div class="
            p-4
            border-t border-blue-800
            grid grid-cols-1
            md:grid-cols-2
            items-center
          ">
                    <div>
                        <p class="text-white font-bold text-lg">
                            © {{ new Date().getFullYear() }} Associação Atlética Acadêmica de
                            Sistemas de Informação
                        </p>
                        <p class="text-white">Todos os direitos reservados.</p>
                    </div>
                    <div class="space-x-4 mt-4 md:mt-0 flex justify-center md:justify-end">
                        <a href="https://discord.gg/XXGBQAXrRv" target="_blank" type="button" class="
                p-3
                rounded-full
                bg-blue-800
                hover:bg-blue-700
                transition-all
                ease-out
              "><svg xmlns="https://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24"
                                style="fill: #fff">
                                <path
                                    d="M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C10.94,11.55,10.52,11.02,10,11.02z M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C10.94,11.55,10.52,11.02,10,11.02z M18,3H6	C4.34,3,3,4.34,3,6v12c0,1.66,1.34,3,3,3h11l-0.38-1.41l3.01,3.03c0.51,0.51,1.37,0.15,1.37-0.56V6C21,4.34,19.66,3,18,3z M17.57,14.74C16.2,15.99,14.41,16,14.41,16l-0.43-0.58c0.44-0.15,0.82-0.35,1.21-0.65l-0.09-0.24c-0.72,0.33-1.65,0.53-3.1,0.53	s-2.38-0.2-3.1-0.53l-0.09,0.24c0.39,0.3,0.77,0.5,1.21,0.65L9.59,16c0,0-1.79-0.01-3.16-1.26c-0.22-0.2-0.31-0.51-0.29-0.8	C6.39,11.05,7.28,9.3,7.6,8.76c0.07-0.13,0.17-0.23,0.29-0.32c0.38-0.25,1.33-0.81,2.5-0.93l0.3,0.61c0.43-0.08,0.9-0.14,1.31-0.14	c0.4,0,0.86,0.06,1.31,0.14l0.3-0.61c1.12,0.09,2.11,0.67,2.5,0.93c0.12,0.09,0.22,0.19,0.29,0.32c0.32,0.55,1.21,2.29,1.46,5.18	C17.88,14.23,17.79,14.54,17.57,14.74z M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18	C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18	C10.94,11.55,10.52,11.02,10,11.02z">
                                </path>
                            </svg></a>
                        <a href="https://www.instagram.com/sistematicosuni" target="_blank" type="button" class="
                p-2
                rounded-full
                bg-blue-800
                hover:bg-blue-700
                transition-all
                ease-out
              "><svg xmlns="https://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 64 64"
                                style="fill: #fff">
                                <path
                                    d="M 31.820312 12 C 13.438312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.438313 52 31.820312 52 L 32.179688 52 C 50.561688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 43.994141 18 C 45.099141 17.997 45.997 18.889141 46 19.994141 C 46.003 21.099141 45.110859 21.997 44.005859 22 C 42.900859 22.003 42.003 21.110859 42 20.005859 C 41.997 18.900859 42.889141 18.003 43.994141 18 z M 31.976562 22 C 37.498562 21.987 41.987 26.454563 42 31.976562 C 42.013 37.498562 37.545437 41.987 32.023438 42 C 26.501437 42.013 22.013 37.545437 22 32.023438 C 21.987 26.501437 26.454563 22.013 31.976562 22 z M 31.986328 26 C 28.672328 26.008 25.992 28.701625 26 32.015625 C 26.008 35.328625 28.700672 38.008 32.013672 38 C 35.327672 37.992 38.008 35.299328 38 31.986328 C 37.992 28.672328 35.299328 25.992 31.986328 26 z">
                                </path>
                            </svg></a>
                        <a type="button" class="
                p-3
                rounded-full
                bg-blue-800
                hover:bg-blue-700
                transition-all
                ease-out
              " href="https://www.tiktok.com/@sistematicosuni" target="_blank"><svg xmlns="https://www.w3.org/2000/svg"
                                x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50" style="fill: #fff">
                                <path
                                    d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
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
