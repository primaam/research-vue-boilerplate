<template>
    <div>
        <button @click="openModal">Buat Todo Baru</button>
        <TodoList :todos="todos" @edit="handleEdit" />
        <TodoModal
            v-if="showModal"
            :isOpen="showModal"
            :mode="modalMode"
            :todo="selectedTodo"
            @save="handleSave"
            @close="closeModal"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import TodoList from "@/components/TodoList.vue";
import TodoModal from "@/components/TodoModal.vue";

const todos = ref([
    { id: 1, title: "Belajar Vue" },
    { id: 2, title: "Buat To-Do App" },
]);

const showModal = ref(false);
const modalMode = ref("add");
const selectedTodo = ref({ id: null, title: "" });

const openModal = () => {
    modalMode.value = "add";
    selectedTodo.value = { id: null, title: "" };
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

const handleEdit = (todo) => {
    modalMode.value = "edit";
    selectedTodo.value = { ...todo };
    showModal.value = true;
};

const handleSave = (todo) => {
    if (modalMode.value === "add") {
        todos.value.push({ ...todo, id: Date.now() });
    } else {
        const index = todos.value.findIndex((t) => t.id === todo.id);
        if (index !== -1) todos.value[index] = todo;
    }
    closeModal();
};
</script>

<!-- <style scoped></style> -->
