<template>
    <div class="sidebar">
        <button @click="logout">Logout</button>
        <button @click="showSessions">Show Sessions</button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$emit('logout'); // Emit an event to the parent component
        },
        showSessions() {
            // Logic to show sessions
        },
    },
};
</script>

<style scoped>
.sidebar {
    width: 15%; /* Width of the sidebar */
    height: 100vh; /* Full height */
    background-color: rgb(99, 99, 221); /* Blue background color */
    color: white; /* Text color */
    padding: 15px; /* Padding inside the sidebar */
    display: flex; /* Use flexbox for layout */
    flex-direction: column; /* Stack buttons vertically */
    gap: 10px; /* Space between buttons */
}
</style>