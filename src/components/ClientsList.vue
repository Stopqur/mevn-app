<template>
    <ul>
        <Client 
            v-for="item of clientsList"
            v-bind:client="item"
            v-bind:key="item.id"
            v-on:editClient="editClient"
        />
    </ul>
</template>

<script>
import Client from './Client.vue'
export default {
    data() {
        return {
           
        }
    },
    props: ['clientsList'],
    components: {
        Client
    },
    methods: {
        editClient(client, flag) {
            this.$emit('editClient', client, flag)
        }
    }
}
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
    }
</style>