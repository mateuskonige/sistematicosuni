<template>
    <section id="header" class="bg-amber-500">
        <div class="max-w-screen-xl mx-auto">
            <div class="
          grid grid-cols-1
          gap-8
          md:gap-12
          px-4
          py-8
          md:py-16
        ">
                <div class="">
                    <h1 class="text-4xl md:text-7xl text-white font-bold mb-8">
                        {{ title }}
                    </h1>
                    <p class="text-lg text-white">
                        Conheça todas as áreas de atuação que você, aluno ou formado, pode participar.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import headerImg from "/public/images/calourada.jfif";

export default {
    props: ['title'],


    data() {
        return {
            headerImg: headerImg,
        };
    },
};
</script>
