<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputError from '@/Components/InputError.vue'
import { useForm } from '@inertiajs/inertia-vue3';

const props = defineProps(['modalidade']);
const modalidade = props.modalidade

const form = useForm({
    nome: modalidade.nome,
    status: modalidade.status,
    dias: modalidade.dias,
    endereco: modalidade.endereco,
    responsavel: modalidade.responsavel,
    responsavelContato: modalidade.responsavelContato,
});

const submit = (id) => {
    form.put(route('admin.modalidades.update', id));
};
</script>

<template>
    <AuthenticatedLayout>
        <div class="p-6 bg-white border-b border-gray-200">Editar modalidade {{ modalidade.nome }}</div>

        <div class="max-w-2xl mx-auto">
            <div class="mt-8 bg-white p-4 rounded shadow">
                <form @submit.prevent="submit(modalidade.id)">
                    <div class="mb-6">
                        <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 ">Nome</label>
                        <input v-model="form.nome" type="text" id="nome"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="ex.: Futsal" required>
                        <InputError class="mt-2" :message="form.errors.nome" />
                    </div>
                    <div class="mb-6">
                        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 ">Status</label>
                        <select v-model="form.status" id="status"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="ex.: Ativo" required>
                            <option value="1">Ativo</option>
                            <option value="0">Inativo</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.status" />
                    </div>
                    <div class="mb-6">
                        <label for="dias" class="block mb-2 text-sm font-medium text-gray-900 ">Dias</label>
                        <input v-model="form.dias" type="text" id="dias"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="ex.: Quarta e Sábado - M" required>
                        <InputError class="mt-2" :message="form.errors.dias" />
                    </div>
                    <div class="mb-6">
                        <label for="endereco" class="block mb-2 text-sm font-medium text-gray-900 ">Endereço</label>
                        <input v-model="form.endereco" type="text" id="endereco"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="ex.: R. Itaguaí, 173, Niterói - RJ (Centrinho)" required>
                        <InputError class="mt-2" :message="form.errors.endereco" />
                    </div>
                    <div class="mb-6">
                        <label for="responsavel"
                            class="block mb-2 text-sm font-medium text-gray-900 ">Responsável</label>
                        <input v-model="form.responsavel" type="text" id="responsavel"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="ex.: Guilherme (Filô)" required>
                        <InputError class="mt-2" :message="form.errors.responsavel" />
                    </div>
                    <div class="mb-6">
                        <label for="responsavelContato" class="block mb-2 text-sm font-medium text-gray-900 ">Whatsapp
                            (Responsável)</label>
                        <div class="grid grid-cols-6 gap-4">
                            <input type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 col-span-1"
                                disabled value="55389">
                            <input v-model="form.responsavelContato" type="text" id="responsavelContato"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 col-span-5"
                                placeholder="ex.: 5538988887777" required>
                        </div>
                        <InputError class="mt-2" :message="form.errors.responsavelContato" />
                    </div>

                    <PrimaryButton>Salvar</PrimaryButton>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>


