<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import Nav from "@/Components/Nav.vue";
import HeaderMini from "@/Components/HeaderMini.vue";
import Footer from "@/Components/Footer.vue";
import modalidadesImg from "/public/images/modalidades.jfif";

</script>

<template>

    <Head title="Sobre" />

    <Nav />

    <HeaderMini title="Sobre"
        body="Conheça um pouco mais sobre a atlética de sistemas de informação da Universidade Estadual de Montes Claros, a nossa UNIMONTES." />

    <div class="bg-gray-100">

        <div class="max-w-screen-xl mx-auto">
            <div class="py-12 px-4 pb-8 ">
                <h2 class="text-blue-900 text-2xl md:text-4xl font-bold mb-8">História</h2>
                <div class="grid grid-cols-5 gap-8">
                    <img class="rounded shadow col-span-2" :src="modalidadesImg" alt="Jogadores do time de Voleibol">

                    <p class="md:text-lg text-blue-900 mb-8 col-span-3">
                        Fundada em 21 de junho de 2011, a Associação Atlética Acadêmica Pio Orlando – AAAPO, homenageia
                        em seu nome um dos funcionários mais antigos e presentes na vida dos estudantes da Escola de
                        Engenharia da UFF.
                        <br>
                        <br>
                        Acreditamos no poder de transformação do esporte e na sua importância para uma vida saudável,
                        tanto para o corpo quanto para a mente. Assim, sem fins lucrativos, todos os treinos são
                        gratuitos. Além disso, a partir de nosso núcleo de torcida, lutamos contra qualquer desigualdade
                        e preconceito, trazendo o esporte ao alcance de todos.
                        <br>
                        <br>
                        Nossas cores são o Vermelho e o Branco, nosso símbolo é o Dragão. Na torcida, somos os melhores!
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer />

</template>
