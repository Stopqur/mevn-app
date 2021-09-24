<template>
    <li class="client" >
        <div class=" aboutClient">
          <p class="aboutClient__name">{{client.name}}</p>
        </div>
        <div class="client__info aboutClient">
          <p class="aboutClient__email">{{client.email}}</p>
        </div>
        <div class="client__info aboutClient">
          <p class="aboutClient__phone">{{client.phone}}</p>
        </div>
        <div class="client__info aboutClient client__infoProviders">
          <Provider
            v-for="item in client.providers" 
            v-bind:item="item" 
            v-bind:key="item.id"
          />
        </div>
        <div class="client__info aboutClient">
          <button v-on:click="editClient" class="editBtn">Edit</button>
        </div>
    </li>
</template>

// <script>
import Provider from './Provider.vue'
export default {
  components: {
    Provider
  },
  data() {
    return {
      flagEditWindow: true
    }
  },
  props: ['client'],
  methods: {
    editClient() {
      this.$emit('editClient', this.client, this.flagEditWindow)
    }
  }
}
</script>
