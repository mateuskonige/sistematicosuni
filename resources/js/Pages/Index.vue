

<template>

    <Head title="Início" />

    <Nav />

    <Header />

    <div class="bg-white">
        <div class="max-w-screen-xl mx-auto">
            <section id="sobre">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 py-16">
                    <div class="bg-white">
                        <span class="text-amber-600 text-lg">Sobre</span>
                        <h1 class="text-4xl md:text-5xl text-blue-900 font-bold mb-8">Quem somos</h1>
                        <p class="text-lg lg:text-xl text-blue-900 mb-8">
                            Acreditamos no poder de transformação do esporte e na sua
                            importância para uma vida saudável. Aqui, todos são bem-vindos!
                        </p>
                        <Link type="button" href="/sobre" class="
                px-6
                py-3
                bg-blue-800
                hover:bg-blue-700 hover:text-white
                transition-all
                ease-out
                rounded-xl
                font-bold
                text-gray-50 hover:text-white text-lg
                mr-6 mb-4 md:mb-0
                border-2 border-white
                hover:ring-2 ring-blue-800
              ">Saiba mais!</Link>
                        <Link type="button" href="/sobre#conquistas" class="
                px-4
                py-2
                rounded-xl
                border border-blue-900
                hover:bg-blue-700 hover:text-white hover:border-blue-700
                transition-all
                ease-out
                text-blue-900 text-lg
              ">Nossas conquistas</Link>
                    </div>
                    <div>
                        <img class="aspect-video object-cover rounded shadow-lg hover:scale-105 transition-all ease-out hover:brightness-110"
                            :src="copoImg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="bg-gray-100">
        <div class="max-w-screen-xl mx-auto">
            <section id="modalidades">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 py-16">
                    <div>
                        <img class="object-cover rounded shadow-lg hover:scale-105 transition-all ease-out hover:brightness-110"
                            :src="modalidadesImg" alt="" />
                    </div>
                    <div>
                        <span class="text-amber-600 text-lg">Modalidades</span>
                        <h1 class="text-4xl md:text-5xl text-blue-900 font-bold mb-8">
                            Fomentando o esporte
                        </h1>
                        <p class="text-lg lg:text-xl text-blue-900 mb-8">
                            Mais do que um grupo formado para fomentar o esporte, as Atléticas
                            são sinônimo de interação, diversão e solidariedade.
                        </p>
                        <ul class="list-inside text-lg text-blue-900 space-y-4 mb-8">
                            <li>
                                <span class="px-3 rounded-full bg-amber-500 mr-4"> </span>
                                Treinos gratuitos
                            </li>
                            <li>
                                <span class="px-3 rounded-full bg-amber-500 mr-4"> </span>
                                Integração social
                            </li>
                        </ul>
                        <Link type="button" href="/modalidades" class="
                px-6
                py-3
                bg-blue-800
                hover:bg-blue-700 hover:text-white
                transition-all
                ease-out
                rounded-xl
                font-bold
                text-gray-50 hover:text-white text-lg
                mr-6 mb-4 md:mb-0
                border-2 border-white
                hover:ring-2 ring-blue-800
              ">Treine conosco!</Link>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="bg-white">
        <div class="max-w-screen-xl mx-auto">
            <section id="midia">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 px-4 md:px-8 py-16 items-center">
                    <div>
                        <span class="text-amber-600 text-lg">Mídia</span>
                        <h1 class="text-4xl md:text-5xl text-blue-900 font-bold mb-8">
                            Melhor conteúdo universitário
                        </h1>
                        <p class="text-lg lg:text-xl text-blue-900 mb-8">
                            As músicas que bombam na nossa calourada e em nossos treinos, e as fotos que são
                            tiradas e que você participou podem estar por aqui!
                        </p>
                        <Link type="button" href="/midia" class="
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
                border-2 border-white
                hover:ring-2 ring-blue-800
              ">Bora acessar!</Link>
                    </div>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="p-4 rounded-xl hover:shadow hover:ring-2 ring-blue-900 transition-all ease-out">
                            <p class="font-bold text-3xl text-blue-900 mb-2">Fotos</p>
                            <p class="text-blue-900">
                                Suas fotos estão aqui! Não esqueça de nos marcar.
                            </p>
                        </div>
                        <div class="p-4 rounded-xl hover:shadow hover:ring-2 ring-blue-900 transition-all ease-out">
                            <p class="font-bold text-3xl text-blue-900 mb-2">Músicas</p>
                            <p class="text-blue-900">Os maiores sucessos da calourada.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <div class="bg-gray-100">
        <div class="max-w-screen-xl mx-auto">
            <section id="ingressos">
                <div class="grid grid-cols-1 items-center px-4 md:px-8 py-16">
                    <div>
                        <span class="text-amber-600 text-lg">Loja e Ingressos</span>
                        <h1 class="text-4xl md:text-5xl text-blue-900 font-bold mb-8">
                            Vista as nossas cores
                        </h1>
                        <p class="text-lg md:text-xl text-blue-900 mb-8">
                            Renove seu guarda-roupa de azul, branco e amarelo e bora curtir
                            com a Sistematicos!
                        </p>
                    </div>
                    <div>


                        <Link type="button" :href="links.loja" class="
                px-6
                py-3
                bg-blue-800
                hover:bg-blue-700 hover:text-white
                transition-all
                ease-out
                rounded-xl
                font-bold
                text-gray-50 hover:text-white text-lg
                mr-6 mb-4 md:mb-0
                border-2 border-white
                hover:ring-2 ring-blue-800
              ">Roupas e acessórios</Link>
                        <a type="button" :href="links.ingressos" class="
                px-4
                py-2
                rounded-xl
                border border-blue-900
                hover:bg-blue-700 hover:text-white hover:border-blue-700
                transition-all
                ease-out
                text-blue-900 text-lg
              ">Ingressos</a>
                    </div>
                </div>

            </section>
        </div>
    </div>

    <Footer />
</template>

<script >
import { Head, Link } from "@inertiajs/inertia-vue3";
import modalidadesImg from "/public/images/modalidades.jfif";
import copoImg from "/public/images/copo.jpg";
import Nav from "@/Components/Nav.vue";
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";



export default {
    props: ['links'],
    components: {
        Head,
        Link,
        Nav,
        Header,
        Footer,
    },

    data() {
        return {
            modalidadesImg: modalidadesImg,
            copoImg: copoImg,
        };
    },
};
</script>
