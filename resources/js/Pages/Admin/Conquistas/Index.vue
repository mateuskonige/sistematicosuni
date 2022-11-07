<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";

defineProps(["conquistas"]);

function destroy(id) {
  if (confirm("Are you sure you want to Delete")) {
    Inertia.delete(route("admin.conquistas.destroy", id));
  }
}
</script>

<template>
  <AuthenticatedLayout>
    <div class="p-6 bg-white border-b border-gray-200 flex justify-around">
      <p class="font-bold text-lg">Conquistas</p>
      <Link :href="route('admin.conquistas.create')">
        <PrimaryButton>Create</PrimaryButton>
      </Link>
    </div>

    <div class="max-w-5xl mx-auto mt-8">
      <div class="bg-white rounded shadow p-4">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="py-3 px-6">Nome</th>
              <th scope="col" class="py-3 px-6">Modalidade</th>
              <th scope="col" class="py-3 px-6">Colocação</th>
              <th scope="col" class="py-3 px-6">Campeonato</th>
              <th scope="col" class="py-3 px-6">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b"
              v-for="(conquista, index) in conquistas"
              :key="index"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                {{ conquista.nome }}
              </th>
              <td class="py-4 px-6">
                {{ conquista.modalidade }}
              </td>
              <td class="py-4 px-6">
                {{
                  conquista.colocacao == 1
                    ? "🥇 (Ouro)"
                    : conquista.colocacao == 2
                    ? "🥈 (Prata)"
                    : "🥉 (Bronze)"
                }}
              </td>
              <td class="py-4 px-6">
                {{
                  conquista.campeonato.nome + " - " + conquista.campeonato.ano
                }}
              </td>
              <td class="py-4 px-6 space-x-5">
                <Link
                  class="
                    py-2
                    px-4
                    bg-teal-600
                    hover:bg-teal-500
                    rounded
                    hover:shadow
                    text-white
                    uppercase
                    font-bold
                    text-[10px]
                    tracking-widest
                  "
                  :href="route('admin.conquistas.edit', conquista.id)"
                  >Editar</Link
                >

                <button
                  class="
                    py-2
                    px-4
                    bg-red-600
                    hover:bg-red-500
                    rounded
                    hover:shadow
                    text-white
                    uppercase
                    font-bold
                    text-[10px]
                    tracking-widest
                  "
                  @click="destroy(conquista.id)"
                >
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AuthenticatedLayout>
</template>


