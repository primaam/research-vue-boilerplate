<template>

</template>

<script setup>
defineProps({
    todos:{
        type: Array,
        required: true
    }
})

defineEmits(['edit', 'delete'])

</script>

<style scoped>
.todo-table {
  width: 100%;
  border-collapse: collapse;
}
.todo-table th, .todo-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.todo-table tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>