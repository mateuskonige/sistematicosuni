<template>
  <nav class="flex items-center justify-between px-4 py-6 bg-amber-500">
    <div>
      <img :src="logo" alt="Escudo dos Sistemáticos" class="w-28 h-28" />
    </div>
    <ul class="flex space-x-6">
      <li>
        <a href="#" class="text-white font-bold hover:text-blue-400 text-lg"
          >Home</a
        >
      </li>
      <li class="">
        <a href="#" class="text-white font-bold hover:text-blue-400 text-lg"
          >Modalidades</a
        >
      </li>
      <li class="">
        <a href="#" class="text-white font-bold hover:text-blue-400 text-lg"
          >Mídia</a
        >
      </li>
      <li class="">
        <a href="#" class="text-white font-bold hover:text-blue-400 text-lg"
          >Área dos Calouros</a
        >
      </li>
      <li class="">
        <a href="#" class="text-white font-bold hover:text-blue-400 text-lg"
          >Contato</a
        >
      </li>
    </ul>
    <div class="space-x-6">
      <a href="#" class="text-white font-bold hover:text-blue-400 text-lg"
        >Ingressos</a
      >
      <a
        href="#"
        class="px-6 py-3 bg-blue-900 rounded font-bold text-amber-300 text-lg"
        >Loja</a
      >
    </div>
  </nav>
</template>

<script>
import logo from "/public/images/logo.png";

export default {
  data() {
    return {
      logo: logo,
    };
  },
};
</script>
