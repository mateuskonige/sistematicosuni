<template>
  <section id="header" class="bg-amber-500">
    <div class="max-w-screen-xl mx-auto">
      <div class="
          grid grid-cols-1
          md:grid-cols-2
          gap-8
          md:gap-12
          px-4
          py-8
          md:py-16
        ">
        <div class="">
          <h1 class="text-5xl md:text-7xl text-white font-bold mb-8">
            #GoCapi
          </h1>
          <p class="text-lg text-white mb-8">
            A. A. A. S. I. SISTEMÁTICOS - Associação Atlética Acadêmica de
            Sistemas de Informação. Investindo no esporte universitário desde
            2019.
          </p>
          <a type="button" href="#" class="
              px-6
              py-3
              bg-blue-900
              hover:bg-blue-800 hover:text-white hover:shadow-lg
              transition-all
              ease-out
              rounded
              font-bold
              text-gray-100 text-lg
            ">Conheça mais!</a>
        </div>
        <div>
          <img class="aspect-video object-none rounded shadow-lg" :src="headerImg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import headerImg from "/public/images/calourada.jfif";

export default {
  data() {
    return {
      headerImg: headerImg,
    };
  },
};
</script>

<style>

</style>
