<template>
    <div v-if="isOpen" class="modal">
        <h2>{{ mode === "add" ? "Buat Todo Baru" : "Edit Todo" }}</h2>
        <input v-model="localTodo.title" placeholder="Judul" />
        <button @click="save">{{ mode === "add" ? "Simpan" : "Update" }}</button>
        <button @click="close">Batal</button>
    </div>
</template>

<script setup>
const props = defineProps({
    isOpen: Boolean,
    mode: String,
    todo: Object,
});

const emit = defineEmits(["save", "close"]);

const localTodo = ref({ ...props.todo });

const save = () => {
    emit("save", localTodo.value);
};

const close = () => {
    emit("close");
};
</script>

<!-- <style scoped></style> -->
