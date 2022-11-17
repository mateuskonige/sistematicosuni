<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Nav from "@/Components/Nav.vue";
import HeaderMini from "@/Components/HeaderMini.vue";
import Footer from "@/Components/Footer.vue";

defineProps(["modalidades"]);
</script>

<template>
  <Head title="Modalidades" />

  <Nav />

  <HeaderMini
    title="Modalidades"
    body="Conheça todas as áreas de atuação que você, aluno ou formado, pode participar."
  />
  <div class="bg-gray-100">
    <div class="max-w-screen-xl mx-auto">
      <div class="py-12 px-4 pb-8">
        <h2 class="text-blue-900 text-2xl md:text-4xl font-bold mb-8">
          Treine de graça com a gente!
        </h2>
        <p class="md:text-lg text-blue-900 mb-8">
          Escolha sua modalidade e, se necessário, entre em contato com o
          responsável. Você será informado de todos detalhes que precisar.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8" v-auto-animate>
          <div
            class="w-full shadow rounded bg-white"
            v-for="(modalidade, index) in modalidades"
            :key="index"
          >
            <button
              class="
                p-4
                bg-blue-900
                text-white
                rounded
                w-full
                uppercase
                font-bold
                cursor-default
              "
            >
              <span
                class="rounded-full px-3 mr-4"
                :class="modalidade.status ? 'bg-green-500' : 'bg-red-500'"
              ></span>
              {{ modalidade.nome }}
            </button>
            <div class="p-4 space-y-4">
              <h3 class="font-bold">Dia & Hora</h3>
              <div>
                <p>{{ modalidade.dias }}</p>
              </div>
              <h3 class="font-bold">Local</h3>
              <div>
                <p>{{ modalidade.endereco }}</p>
              </div>
              <h3 class="font-bold">Responsável</h3>
              <div>
                <p>
                  {{ modalidade.responsavel }} -
                  <a
                    target="_blank"
                    class="text-blue-600 hover:underline hover:text-blue-700"
                    :href="`https://api.whatsapp.com/send?phone=55389${modalidade.responsavelContato}`"
                    >WhatsApp</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
