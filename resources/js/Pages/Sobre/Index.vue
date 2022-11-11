<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Nav from "@/Components/Nav.vue";
import HeaderMini from "@/Components/HeaderMini.vue";
import Footer from "@/Components/Footer.vue";
import modalidadesImg from "/public/images/modalidades.jfif";

defineProps(["campeonatos", "anos", "conquistas"]);
</script>

<template>
  <Head title="Sobre" />

  <Nav />

  <HeaderMini
    title="Sobre"
    body="Conheça um pouco mais sobre a atlética de sistemas de informação da Universidade Estadual de Montes Claros, a nossa UNIMONTES."
  />

  <div class="bg-gray-100">
    <div class="max-w-screen-xl mx-auto">
      <div class="py-12 px-4 pb-8">
        <h2 class="text-blue-900 text-2xl md:text-4xl font-bold mb-8">
          História
        </h2>
        <div
          class="
            grid grid-cols-1
            md:grid-cols-5 md:gap-8
            space-y-8
            md:space-y-0
          "
        >
          <img
            class="rounded shadow col-span-2"
            :src="modalidadesImg"
            alt="Jogadores do time de Voleibol"
          />

          <p class="md:text-lg text-blue-900 mb-8 col-span-3">
            A A.A.A.S.I é fruto do empenho e da vontade de alunos do curso de
            Sistemas de Informação da Universidade Estadual de Montes Claros
            (Unimontes), que entenderam que a integração e o networking é parte
            muito importante no desenvolvimento humano e profissional de
            qualquer pessoa e, principalmente no contexto em que estamos
            inseridos, na vida dos alunos universitários.
            <br />
            <br />
            Então, foi a partir deste desejo em comum, que a Atlética de
            Sistemas de Informação começou a ser desenvolvida no ano de 2018,
            principalmente com estudantes das turmas turmas 36 e 37 e com o
            apoio daqueles que também acreditam no mesmo ideal. O começo foi
            estimulante, mas ainda no início de sua história, a Atlética
            enfrentou alguns problemas em sua consolidação: Com a pandemia de
            Covid–19 em 2020, ficamos estagnados nos limitando apenas em
            e-esportes e no contato à distância.
            <br />
            <br />
            Mas ainda assim, contra todas as expectativas, a vontade de fazer a
            diferença ainda se manteve viva nos corações de muitos alunos, e foi
            assim que no ano de 2022, uma nova diretoria foi estabelecida e a
            A.A.A.S.I ressurgiu com força total, estreando junto com a nova
            diretoria, novas ideias, novos eventos, e um desejo mais vivo de
            união entre os alunos de sistemas de informação, ou como gostam de
            serem chamados, os “sistemáticos”.
            <br />
            <br />
            Apesar da história da A.A.A.S.I ainda ser muito recente, a força de
            vontade de seus integrantes fez com que a Atlética ganhasse
            notoriedade na universidade em que está inserida, de fato, hoje, é
            possível ver que a Atlética vive seu momento mais alegre, mais
            forte, e com muito potencial pela frente.
            <br />
            <br />
            Estamos ainda nas primeiras linhas desta trajetória, mas se você,
            assim como nós, é um sistemático, junte-se a este grupo e nos ajude
            a escrever mais páginas desta nossa história!
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto">
      <div class="py-12 px-4 pb-8">
        <h2 class="text-blue-900 text-2xl md:text-4xl font-bold mb-8">
          Conquistas
        </h2>
        <div
          class="
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
          "
        >
          <div v-for="(ano, index) in anos" :key="index">
            <button
              class="
                p-4
                cursor-default
                bg-blue-900
                text-white
                rounded-t
                w-full
                shadow
                uppercase
                font-bold
              "
            >
              {{ ano }}
            </button>
            <div v-for="campeonato in campeonatos" :key="campeonato.id">
              <details
                v-if="campeonato.ano == ano"
                class="p-4 bg-white border-b border-gray-200 shadow"
              >
                <summary class="font-bold py-2 cursor-pointer">
                  {{ campeonato.nome }}
                </summary>
                <ul>
                  <li
                    v-for="conquista in campeonato.conquistas"
                    :key="conquista.id"
                  >
                    {{
                      conquista.colocacao == 1
                        ? "🥇"
                        : conquista.colocacao == 2
                        ? "🥈"
                        : "🥉"
                    }}
                    - {{ conquista.nome + " - " + conquista.modalidade }}
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
