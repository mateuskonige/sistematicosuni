

<template>

    <Head title="Início" />

    <Nav />

    <Header />

    <div class="bg-white">
        <div class="max-w-screen-xl mx-auto">
            <section id="sobre">
                <div class="grid grid-cols-2 gap-12 px-4 py-16">
                    <div class="bg-white">
                        <span class="text-amber-600 text-lg">Sobre</span>
                        <h1 class="text-5xl text-blue-900 font-bold mb-8">Quem somos</h1>
                        <p class="text-xl text-blue-900 mb-8">
                            Acreditamos no poder de transformação do esporte e na sua
                            importância para uma vida saudável. Aqui, todos são bem-vindos!
                        </p>
                        <a type="button" href="#" class="
                px-6
                py-3
                bg-blue-800
                hover:bg-blue-700 hover:text-white
                transition-all
                ease-out
                rounded
                font-bold
                text-amber-100 text-lg
                mr-6
              ">Saiba mais!</a>
                        <a type="button" href="#" class="
                px-6
                py-3
                rounded
                border border-blue-900
                hover:bg-blue-700 hover:text-white hover:border-blue-700
                transition-all
                ease-out
                font-bold
                text-blue-900 text-lg
              ">Nossas conquistas</a>
                    </div>
                    <div>
                        <img class="aspect-video object-cover rounded shadow-lg" :src="headerImg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="bg-gray-100">
        <div class="max-w-screen-xl mx-auto">
            <section id="modalidades">
                <div class="grid grid-cols-2 gap-12 px-4 py-16">
                    <div>
                        <img class="object-cover rounded shadow-lg" :src="modalidadesImg" alt="" />
                    </div>
                    <div>
                        <span class="text-amber-600 text-lg">Modalidades</span>
                        <h1 class="text-5xl text-blue-900 font-bold mb-8">
                            Fomentando o esporte
                        </h1>
                        <p class="text-xl text-blue-900 mb-8">
                            Acreditamos no poder de transformação do esporte e na sua
                            importância para uma vida saudável. Aqui, todos são bem-vindos!
                        </p>
                        <a type="button" href="#" class="
                px-6
                py-3
                bg-blue-900
                rounded
                font-bold
                text-amber-300 text-lg
                mr-6
              ">Saiba mais!</a>
                        <a type="button" href="#" class="
                px-6
                py-3
                rounded
                border border-blue-900
                font-bold
                text-blue-900 text-lg
              ">Nossas conquistas</a>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="bg-white">
        <div class="max-w-screen-xl mx-auto">
            <section id="sobre">
                <div class="grid grid-cols-2 gap-12 px-4 py-16">
                    <div>
                        <span class="text-amber-600 text-lg">Modalidades</span>
                        <h1 class="text-5xl text-blue-900 font-bold mb-8">
                            Fomentando o esporte
                        </h1>
                        <p class="text-xl text-blue-900 mb-8">
                            Acreditamos no poder de transformação do esporte e na sua
                            importância para uma vida saudável. Aqui, todos são bem-vindos!
                        </p>
                        <a type="button" href="#" class="
                px-6
                py-3
                bg-blue-900
                rounded
                font-bold
                text-amber-300 text-lg
                mr-6
              ">Saiba mais!</a>
                        <a type="button" href="#" class="
                px-6
                py-3
                rounded
                border border-blue-900
                font-bold
                text-blue-900 text-lg
              ">Nossas conquistas</a>
                    </div>
                    <div>
                        <span class="text-amber-600 text-lg">Modalidades</span>
                        <h1 class="text-5xl text-blue-900 font-bold mb-8">
                            Fomentando o esporte
                        </h1>
                        <p class="text-xl text-blue-900 mb-8">
                            Acreditamos no poder de transformação do esporte e na sua
                            importância para uma vida saudável. Aqui, todos são bem-vindos!
                        </p>
                        <a type="button" href="#" class="
                px-6
                py-3
                bg-blue-900
                rounded
                font-bold
                text-amber-300 text-lg
                mr-6
              ">Saiba mais!</a>
                        <a type="button" href="#" class="
                px-6
                py-3
                rounded
                border border-blue-900
                font-bold
                text-blue-900 text-lg
              ">Nossas conquistas</a>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="bg-gray-100">
        <div class="max-w-screen-xl mx-auto">
            <section id="sobre">
                <div class="grid grid-cols-1 px-4 py-16">
                    <div>
                        <span class="text-amber-600 text-lg">Modalidades</span>
                        <h1 class="text-5xl text-blue-900 font-bold mb-8">
                            Fomentando o esporte
                        </h1>
                        <p class="text-xl text-blue-900 mb-8">
                            Acreditamos no poder de transformação do esporte e na sua
                            importância para uma vida saudável. Aqui, todos são bem-vindos!
                        </p>
                        <a type="button" href="#" class="
                px-6
                py-3
                bg-blue-900
                rounded
                font-bold
                text-amber-300 text-lg
                mr-6
              ">Saiba mais!</a>
                        <a type="button" href="#" class="
                px-6
                py-3
                rounded
                border border-blue-900
                font-bold
                text-blue-900 text-lg
              ">Nossas conquistas</a>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <Footer />
</template>

<script >
import { Head } from "@inertiajs/inertia-vue3";
import modalidadesImg from "/public/images/modalidades.jfif";
import Nav from "@/Components/Nav.vue";
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";

export default {
    components: {
        Head,
        Nav,
        Header,
        Footer,
    },

    data() {
        return {
            modalidadesImg: modalidadesImg,
        };
    },
};
</script>
