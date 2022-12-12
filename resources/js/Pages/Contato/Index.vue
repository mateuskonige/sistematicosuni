<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import Nav from "@/Components/Nav.vue";
import HeaderMini from "@/Components/HeaderMini.vue";
import Footer from "@/Components/Footer.vue";

defineProps(['modalidades'])
</script>

<template>

    <Head title="Contato" />

    <Nav />

    <HeaderMini title="Contato"
        body="Ficou com alguma dúvida? Tem alguma sugestão? Quer apoiar a Atlética? Fale com a gente!" />

    <div class="bg-gray-100">
        <div class="max-w-screen-xl mx-auto">
            <div class="py-12 px-4 pb-8 ">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div>

                        <h3 class="text-3xl md:text-5xl text-blue-900 font-bold mb-8">Suporte</h3>
                        <p class="md:text-lg text-blue-900 mb-8">Retornaremos o seu contato o mais rápido possível. Você
                            também
                            pode
                            falar com a gente pelas
                            nossas redes sociais.</p>
                        <a class="text-blue-600 hover:text-blue-700 font-bold hover:underline "
                            href="mailto:contatosistematicos@gmail.com">contatosistematicos@gmail.com</a>

                        <h3 class="text-3xl md:text-5xl text-blue-900 font-bold mb-8 mt-16">Onde estamos?</h3>
                        <p class="md:text-lg text-blue-900 mb-8">Nossa sala fica localizada no segundo andar do prédio
                            3,
                            entre a
                            biblioteca e a secretaria geral, no campus sede da UNIMONTES.</p>
                        <a class="text-blue-600 hover:text-blue-700 font-bold hover:underline mb-8" target="_blank"
                            href="https://maps.google.com/maps/dir//Universidade+Estadual+de+Montes+Claros+-+Unimontes+Campus+Universit%C3%A1rio+Prof.+Darcy+Ribeiro+Av.+Prof.+Rui+Braga,+s%2Fn+-+Vila+Mauriceia+Montes+Claros+-+MG,+39401-089/@-16.7186987,-43.8785728,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x754ab5bc36990c9:0xa809bd14bd946505">Av.
                            Prof.
                            Rui Braga, s/n - Vila Mauriceia, Montes Claros - MG, 39401-089</a>

                    </div>
                    <div>
                        <iframe id="gmap_canvas"
                            src="https://maps.google.com/maps?q=reitoria%20unimontes&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                            class="w-full h-64 md:h-full shadow rounded"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
