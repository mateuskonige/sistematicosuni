<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import NotificationBox from '@/Components/NotificationBox.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Link } from '@inertiajs/inertia-vue3';
import { Inertia } from "@inertiajs/inertia";

defineProps(['modalidades'])

function destroy(id) {
    if (confirm("Tem certeza de que deseja excluir? ")) {
        Inertia.delete(route("admin.modalidades.destroy", id));
    }
}
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
            <NotificationBox />
            <div class="bg-white rounded shadow p-4 overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 ">
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
                            <th scope="col" class="py-3 px-6 float-right">
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
                            <td class="py-4 px-6 inline-flex space-x-4 float-right">
                                <Link
                                    class="py-2 px-4 bg-teal-600 hover:bg-teal-500 rounded hover:shadow text-white uppercase font-bold text-[10px] tracking-widest"
                                    :href="route('admin.modalidades.edit', modalidade.id)">Editar</Link>

                                <button
                                    class="py-2 px-4 bg-red-600 hover:bg-red-500 rounded hover:shadow text-white uppercase font-bold text-[10px] tracking-widest"
                                    @click="destroy(modalidade.id)">Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AuthenticatedLayout>
</template>


