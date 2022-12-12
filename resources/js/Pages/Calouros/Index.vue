<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Nav from "@/Components/Nav.vue";
import HeaderMini from "@/Components/HeaderMini.vue";
import Footer from "@/Components/Footer.vue";
import modalidadesImg from "/public/images/modalidades.jfif";
</script>

<template>

    <Head title="Calouros" />

    <Nav />

    <HeaderMini title="Calouros"
        body="Bem vindx, calourx! Conheça um pouco sobre os cursos de Sistemas de Informação da UNIMONTES - Montes Claros, como entrar em contato." />

    <div class="bg-gray-100">
        <div class="max-w-screen-xl mx-auto">
            <div class="py-12 px-4 pb-8">
                <h2 class="text-blue-900 text-2xl md:text-4xl font-bold mb-8">
                    Encontre as informações sobre seu curso!
                </h2>
                <div class="
            grid grid-cols-1
            lg:grid-cols-5 md:gap-8
            space-y-8
            md:space-y-0
          ">
                    <img class="rounded shadow col-span-2" :src="modalidadesImg" alt="Jogadores do time de Voleibol" />

                    <div class="md:text-lg text-blue-900 mb-8 col-span-3">
                        <span class="font-bold">Curso Presencial:</span>
                        <br>
                        Modalidade: Bacharelado,
                        Duração: 8 semestres,
                        Centro de Ciências Exatas e Tecnológicas - CCET,
                        Campus Montes Claros - Diurno.

                        <br>
                        <br>
                        <span class="font-bold">Distribuição de vagas:</span>
                        <br>
                        28 Vagas semestrais (20 - SISU / 08 - PAES)

                        <div class="mt-8">
                            <a type="button" target="_blank" href="https://unimontes.br/curso/sistemas-de-informacao/"
                                class="
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
              ">Portal do curso</a>
                            <a type="button" target="_blank"
                                href="https://sites.google.com/unimontes.br/sistemasdeinformacao/" class="
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
              ">Blog do curso</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
