<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import { useForm } from "@inertiajs/inertia-vue3";

defineProps(["campeonatos"]);

const form = useForm({
  nome: null,
  modalidade: null,
  colocacao: null,
  campeonato_id: null,
});

const submit = () => {
  form.post(route("admin.conquistas.store"));
};
</script>

<template>
  <AuthenticatedLayout>
    <div class="p-6 bg-white border-b border-gray-200">Cadastrar conquista</div>

    <div class="max-w-2xl mx-auto">
      <div class="mt-8 bg-white p-4 rounded shadow">
        <form @submit.prevent="submit()">
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
              for="modalidade"
              class="block mb-2 text-sm font-medium text-gray-900"
              >modalidade</label
            >
            <select
              v-model="form.modalidade"
              id="modalidade"
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
              placeholder="ex.: Ativo"
              required
            >
              <option value="" hidden selected>Escolha...</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
            <InputError class="mt-2" :message="form.errors.modalidade" />
          </div>
          <div class="mb-6">
            <label
              for="colocacao"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Colocação</label
            >
            <select
              v-model="form.colocacao"
              id="colocacao"
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
              placeholder="ex.: Ativo"
              required
            >
              <option value="1">🥇 (Ouro)</option>
              <option value="2">🥈 (Prata)</option>
              <option value="3">🥉 (Bronze)</option>
            </select>
            <InputError class="mt-2" :message="form.errors.colocacao" />
          </div>

          <div class="mb-6">
            <label
              for="campeonato"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Campeonato</label
            >
            <select
              v-model="form.campeonato_id"
              id="campeonato"
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
              placeholder="ex.: Ativo"
              required
            >
              <option
                v-for="campeonato in campeonatos"
                :key="campeonato.id"
                :value="campeonato.id"
              >
                {{ campeonato.nome }} - {{ campeonato.ano }}
              </option>
            </select>
            <InputError class="mt-2" :message="form.errors.colocacao" />
          </div>

          <PrimaryButton>Salvar</PrimaryButton>
        </form>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
