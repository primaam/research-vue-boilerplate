<template>
    <table class="todo-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Judul</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="todo in todos" :key="todo.id">
                <td>{{ todo.id }}</td>
                <td>{{ todo.title }}</td>
                <td>
                    <button @click="$emit('edit', todo)">Edit</button>
                    <button @click="$emit('delete', todo.id)">Hapus</button>
                    <router-link :to="`/detail/${todo.id}`">Detail</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
defineProps({
    todos: {
        type: Array,
        required: true,
    },
});

defineEmits(["edit", "delete"]);
</script>

<style scoped>
.todo-table {
    width: 100%;
    border-collapse: collapse;
}
.todo-table th,
.todo-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}
.todo-table tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>
