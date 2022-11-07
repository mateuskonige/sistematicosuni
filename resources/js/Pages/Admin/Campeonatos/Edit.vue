<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import { useForm } from "@inertiajs/inertia-vue3";

const props = defineProps(["campeonatos"]);
const campeonato = props.campeonato;

const form = useForm({
  nome: campeonato.nome,
  ano: campeonato.ano,
});

const submit = (id) => {
  form.put(route("admin.campeonatos.update", id));
};
</script>

<template>
  <AuthenticatedLayout>
    <div class="p-6 bg-white border-b border-gray-200">
      Editar campeonato {{ campeonato.nome }}
    </div>

    <div class="max-w-2xl mx-auto">
      <div class="mt-8 bg-white p-4 rounded shadow">
        <form @submit.prevent="submit(campeonato.id)">
          <div class="mb-6">
            <label
              for="nome"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Nome</label
            >
            <input
              v-model="form.nome"
              type="text"
              id="nome"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
              "
              placeholder="ex.: Futsal"
              required
            />
            <InputError class="mt-2" :message="form.errors.nome" />
          </div>
          <div class="mb-6">
            <label
              for="ano"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Ano</label
            >
            <input
              v-model="form.ano"
              type="text"
              id="ano"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
              "
              placeholder="ex.: Futsal"
              required
            />
            <InputError class="mt-2" :message="form.errors.ano" />
          </div>

          <PrimaryButton>Salvar</PrimaryButton>
        </form>
      </div>
    </div>
  </AuthenticatedLayout>
</template>


