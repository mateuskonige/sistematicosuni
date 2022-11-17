

<template>
  <Head title="Início" />

  <Nav />

  <Header />

  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto">
      <section id="sobre">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-16">
          <div class="bg-white">
            <span class="text-amber-600 text-lg">Sobre</span>
            <h1 class="text-5xl text-blue-900 font-bold mb-8">Quem somos</h1>
            <p class="text-xl text-blue-900 mb-8">
              Acreditamos no poder de transformação do esporte e na sua
              importância para uma vida saudável. Aqui, todos são bem-vindos!
            </p>
            <Link
              type="button"
              href="/sobre"
              class="
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
              "
              >Saiba mais!</Link
            >
            <a
              type="button"
              href="#"
              class="
                px-6
                py-3
                rounded
                border border-blue-900
                hover:bg-blue-700 hover:text-white hover:border-blue-700
                transition-all
                ease-out
                font-bold
                text-blue-900 text-lg
              "
              >Nossas conquistas</a
            >
          </div>
          <div>
            <img
              class="aspect-video object-cover rounded shadow-lg"
              :src="copoImg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="max-w-screen-xl mx-auto">
      <section id="modalidades">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-16">
          <div>
            <img
              class="object-cover rounded shadow-lg"
              :src="modalidadesImg"
              alt=""
            />
          </div>
          <div>
            <span class="text-amber-600 text-lg">Modalidades</span>
            <h1 class="text-5xl text-blue-900 font-bold mb-8">
              Fomentando o esporte
            </h1>
            <p class="text-xl text-blue-900 mb-8">
              Mais do que um grupo formado para fomentar o esporte, as Atléticas
              são sinônimo de interação, diversão e solidariedade.
            </p>
            <ul class="list-inside text-xl text-blue-900 space-y-4 mb-8">
              <li>
                <span class="px-3 rounded-full bg-amber-500 mr-4"> </span>
                Treinos gratuitos
              </li>
              <li>
                <span class="px-3 rounded-full bg-amber-500 mr-4"> </span>
                Integração social
              </li>
            </ul>
            <a
              type="button"
              href="#"
              class="
                px-6
                py-3
                bg-blue-900
                rounded
                font-bold
                text-amber-300 text-lg
                mr-6
              "
              >Saiba mais!</a
            >
            <a
              type="button"
              href="#"
              class="
                px-6
                py-3
                rounded
                border border-blue-900
                font-bold
                text-blue-900 text-lg
              "
              >Nossas conquistas</a
            >
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto">
      <section id="midia">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-16 items-center"
        >
          <div>
            <span class="text-amber-600 text-lg">Mídia</span>
            <h1 class="text-5xl text-blue-900 font-bold mb-8">
              Melhor conteúdo universitário
            </h1>
            <p class="text-xl text-blue-900 mb-8">
              Acreditamos no poder de transformação do esporte e na sua
              importância para uma vida saudável. Aqui, todos são bem-vindos!
            </p>
            <a
              type="button"
              href="#"
              class="
                px-6
                py-3
                bg-blue-900
                rounded
                font-bold
                text-amber-300 text-lg
                mr-6
              "
              >Saiba mais!</a
            >
            <a
              type="button"
              href="#"
              class="
                px-6
                py-3
                rounded
                border border-blue-900
                font-bold
                text-blue-900 text-lg
              "
              >Nossas conquistas</a
            >
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <p class="font-bold text-3xl text-blue-900 mb-2">Fotos</p>
              <p class="text-blue-900">
                Suas fotos estão aqui! Não esqueça de nos marcar.
              </p>
            </div>
            <div>
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
        <div class="grid grid-cols-1 md:grid-cols-2 items-center px-4 py-16">
          <div>
            <span class="text-amber-600 text-lg">Loja e Ingressos</span>
            <h1 class="text-5xl text-blue-900 font-bold mb-8">
              Vista as nossas cores
            </h1>
            <p class="text-xl text-blue-900 mb-8">
              Renove seu guarda-roupa de azul, branco e amarelo e bora curtir
              com a Sistematicos!
            </p>
          </div>
          <div class="flex md:flex-row md:justify-end space-x-4">
            <a
              type="button"
              href="#"
              class="
                px-6
                py-3
                bg-blue-900
                rounded
                font-bold
                text-amber-300 text-lg
              "
              >Ingressos!</a
            >
            <a
              type="button"
              href="#"
              class="
                px-6
                py-3
                rounded
                border border-blue-900
                font-bold
                text-blue-900 text-lg
              "
              >Seja sócio</a
            >
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
import copoImg from "/public/images/copo.jpg";
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
      copoImg: copoImg,
    };
  },
};
</script>
