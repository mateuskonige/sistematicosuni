<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Nav from "@/Components/Nav.vue";
import HeaderMini from "@/Components/HeaderMini.vue";
import Footer from "@/Components/Footer.vue";
</script>

<template>
  <Head title="Mídia" />

  <Nav />

  <HeaderMini
    title="Mídia"
    body="Explore todo conteúdo preparado para você e fique de boa como uma capivara."
  />
  <div class="bg-gray-100">
    <div class="max-w-screen-xl mx-auto">
      <div class="pt-12 px-4">
        <h2 class="text-blue-900 text-2xl md:text-4xl font-bold mb-8">
          Sinta essa experiência
        </h2>
        <p class="md:text-lg text-blue-900 mb-8">
          Se prepare para o vermelho e branco dominar a sua tela.
        </p>
      </div>

      <div class="py-12 px-4 pb-8">
        <div class="grid grid-cols-3 gap-8">
          <div class="bg-white rounded shadow p-8 space-y-8">
            <h6 class="text-2xl text-blue-900 font-bold">Fotos</h6>
            <p class="md:text-lg text-blue-900 mb-8">
              Foi para algum evento e quer suas fotos em alta definição? Fica
              tranquilo, aqui é tudo liberado.
            </p>

            <a
              type="button"
              href="/sobre"
              class="
                px-6
                py-3
                bg-blue-900
                hover:bg-blue-800 hover:text-white hover:shadow-lg
                transition-all
                ease-out
                rounded
                font-bold
                text-gray-100 text-lg
              "
              >Conheça mais!</a
            >
          </div>
          <div class="bg-white rounded shadow p-8 space-y-8">
            <h6 class="text-2xl text-blue-900 font-bold">Vídeos</h6>
            <p class="md:text-lg text-blue-900 mb-8">
              Foi para algum evento e quer suas fotos em alta definição? Fica
              tranquilo, aqui é tudo liberado.
            </p>

            <a
              type="button"
              href="/sobre"
              class="
                px-6
                py-3
                bg-blue-900
                hover:bg-blue-800 hover:text-white hover:shadow-lg
                transition-all
                ease-out
                rounded
                font-bold
                text-gray-100 text-lg
              "
              >Conheça mais!</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto">
      <div class="py-12 px-4 pb-8">
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h2 class="text-blue-900 text-2xl md:text-4xl font-bold mb-8">
              Entre no ritmo da Capivara
            </h2>
            <p class="md:text-lg text-blue-900 mb-8">
              Acompanhe os maiores sucessos da torcida Sistematicos e se prepare
              para dar um show na arquibancada e na calourada.
            </p>
            <a
              type="button"
              href="/sobre"
              class="
                px-6
                py-3
                bg-blue-900
                hover:bg-blue-800 hover:text-white hover:shadow-lg
                transition-all
                ease-out
                rounded
                font-bold
                text-gray-100 text-lg
              "
              >Conheça mais!</a
            >
          </div>
          <div style="left: 0; width: 100%; height: 380px; position: relative">
            <iframe
              class="rounded shadow"
              src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMXbN3EUUhlg?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
</script>
