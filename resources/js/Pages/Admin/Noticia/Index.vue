<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import NotificationBox from "@/Components/NotificationBox.vue";
import { useForm } from "@inertiajs/inertia-vue3";

const props = defineProps(["noticia"]);
const noticia = props.noticia;

const form = useForm({
    description: noticia.description,
    active: noticia.active,
});

const submit = (id) => {
    form.put(route("admin.noticia.update", id));
};
</script>

<template>
    <AuthenticatedLayout>
        <div class="p-6 bg-white border-b border-gray-200">
            Editar notícia
        </div>


        <div class="max-w-2xl mx-auto">
            <div class="mt-8 bg-white p-4 rounded shadow">
                <NotificationBox />
                <form @submit.prevent="submit(noticia.id)">
                    <div class="mb-6">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900">Detalhes da
                            notícia</label>
                        <input v-model="form.description" type="text" id="description" class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
              " placeholder="ex.: https://www.unimontes.br/" required />
                        <InputError class="mt-2" :message="form.errors.description" />
                    </div>
                    <div class="mb-6">
                        <label for="active" class="block mb-2 text-sm font-medium text-gray-900 ">Status</label>
                        <select v-model="form.active" id="active"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="ex.: Ativo" required>
                            <option value="" selected hidden>...</option>
                            <option value="1">Ativo</option>
                            <option value="0">Inativo</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.active" />
                    </div>

                    <PrimaryButton>Salvar</PrimaryButton>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>


