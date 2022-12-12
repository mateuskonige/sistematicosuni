<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputError from "@/Components/InputError.vue";
import NotificationBox from "@/Components/NotificationBox.vue";
import { useForm } from "@inertiajs/inertia-vue3";

const props = defineProps(["links"]);
const links = props.links;

const form = useForm({
    loja: links.loja,
    ingressos: links.ingressos,
    playlist: links.playlist,
    driveFotos: links.driveFotos,
});

const submit = (id) => {
    form.put(route("admin.links.update", id));
};
</script>

<template>
    <AuthenticatedLayout>
        <div class="p-6 bg-white border-b border-gray-200">
            Editar links
        </div>


        <div class="max-w-2xl mx-auto">
            <div class="mt-8 bg-white p-4 rounded shadow">
                <NotificationBox />
                <form @submit.prevent="submit(links.id)">
                    <div class="mb-6">
                        <label for="loja" class="block mb-2 text-sm font-medium text-gray-900">Link de redirecionamento
                            para a loja</label>
                        <input v-model="form.loja" type="text" id="loja" class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
              " placeholder="ex.: https://www.unimontes.br/" required />
                        <InputError class="mt-2" :message="form.errors.loja" />
                    </div>
                    <div class="mb-6">
                        <label for="ingressos" class="block mb-2 text-sm font-medium text-gray-900">Link para compra de
                            ingressos</label>
                        <input v-model="form.ingressos" type="text" id="ingressos" class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
              " placeholder="ex.: https://www.unimontes.br/" required />
                        <InputError class="mt-2" :message="form.errors.ingressos" />
                    </div>
                    <div class="mb-6">
                        <label for="playlist" class="block mb-2 text-sm font-medium text-gray-900">Link para a playlist
                            exibida no site</label>
                        <input v-model="form.playlist" type="text" id="playlist" class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
              " placeholder="ex.: https://www.unimontes.br/" required />
                        <InputError class="mt-2" :message="form.errors.playlist" />
                    </div>
                    <div class="mb-6">
                        <label for="driveFotos" class="block mb-2 text-sm font-medium text-gray-900">Link para o drive
                            com
                            as Fotos da atlética</label>
                        <input v-model="form.driveFotos" type="text" id="driveFotos" class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
              " placeholder="ex.: https://www.unimontes.br/" required />
                        <InputError class="mt-2" :message="form.errors.driveFotos" />
                    </div>


                    <PrimaryButton>Salvar</PrimaryButton>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>


