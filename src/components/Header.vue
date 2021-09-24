<template>
    <header class="header">
      <h1 class="header__title">Clients</h1>
      <button @click="openRegWindow" class="btnOption">New Client</button>
    </header>
</template>

<script>
export default {
  data() {
    return {
      flagNewClient: true
    }
  },
  methods: {
    openRegWindow: function () {
      this.$emit('openReg', this.flagNewClient)
    }
  }
}
</script>
