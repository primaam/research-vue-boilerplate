<template>
    <div>
        <h1>Detail Todo: {{ todo.title }}</h1>
        <button @click="openEditModal">Edit</button>
        <TodoModal
            v-if="showEditModal"
            :isOpen="showEditModal"
            mode="edit"
            :todo="todo"
            @save="handleUpdate"
            @close="closeEditModal"
        />
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import TodoModal from "../components/TodoModal.vue";

const route = useRoute();
const todos = ref([
    { id: 1, title: "Belajar Vue" },
    { id: 2, title: "Buat To-Do App" },
]);

const todo = computed(() => {
    return todos.value.find((t) => t.id === Number(route.params.id));
});

const showEditModal = ref(false);

const openEditModal = () => {
    showEditModal.value = true;
};

const closeEditModal = () => {
    showEditModal.value = false;
};

const handleUpdate = (updatedTodo) => {
    const index = todos.value.findIndex((t) => t.id === updatedTodo.id);
    if (index !== -1) todos.value[index] = updatedTodo;
    closeEditModal();
};
</script>

<!-- <style scoped></style> -->
