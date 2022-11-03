<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link } from '@inertiajs/inertia-vue3';

defineProps(['modalidades']);
</script>

<template>
    <AuthenticatedLayout>

        <div class="p-6 bg-white border-b border-gray-200 flex justify-around">
            <p class="font-bold text-lg">Modalidades</p>
            <Link :href="route('admin.modalidades.create')">
            <PrimaryButton>Create</PrimaryButton>
            </Link>
        </div>

        <div class="max-w-5xl mx-auto mt-8">
            <div class="bg-white rounded shadow p-4">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Nome
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Responsável
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b " v-for="(modalidade, index) in modalidades" :key="index">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {{ modalidade.nome }}
                            </th>
                            <td class="py-4 px-6">
                                {{ modalidade.status ? 'Ativo' : 'Inativo' }}
                            </td>
                            <td class="py-4 px-6">
                                {{ modalidade.responsavel }}
                            </td>
                            <td class="py-4 px-6">
                                Editar

                                Excluir
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>




    </AuthenticatedLayout>
</template>
