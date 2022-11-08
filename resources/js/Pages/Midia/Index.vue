<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import Nav from "@/Components/Nav.vue";
import HeaderMini from "@/Components/HeaderMini.vue";
import Footer from "@/Components/Footer.vue";

</script>

<template>

    <Head title="Mídia" />

    <Nav />

    <HeaderMini title="Mídia" body="Explore todo conteúdo preparado para você e fique de boa como uma capivara." />
    <div class="bg-gray-100">

        <div class="max-w-screen-xl mx-auto">
            <div class="py-12 px-4 pb-8 ">
                <h2 class="text-blue-900 text-2xl md:text-4xl font-bold mb-8">Sinta essa experiência</h2>
                <p class="md:text-lg text-blue-900 mb-8">Se prepare para o vermelho e branco dominar a sua tela.</p>


            </div>
        </div>
    </div>

    <Footer />
</template>
