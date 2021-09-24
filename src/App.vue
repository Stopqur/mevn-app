<template>
  <div class="container" id="app">
    <Header @openReg="openReg"/>
    <section class="main">
      <div class="main__info">
        <div class="aboutClient">
          <h2 class="aboutClient__name">Name</h2>
        </div>
        <div class="aboutClient">
          <h2 class="aboutClient__email">Email</h2>
        </div>
        <div class="aboutClient">
          <h2 class="aboutClient__phone">Phone</h2>
        </div>
        <div class="aboutClient">
          <h2 class="aboutClient__providers">Providers</h2>
        </div>
        <div class="aboutClient">
          <h2 class="aboutClient__edit">/</h2>
        </div>
      </div>
      <ClientsList 
        v-bind:clientsList="clientsList" 
        @editClient="editClient"/>
    </section>
    <div v-if="flag">
      <RegWindow 
        @cancelClient="cancelClient" 
        @createClient="createClient"/>
    </div>
    <div v-if="flagEditWindow">
      <EditWindow 
        @cancelClient="cancelClient" 
        @editClient="editClient" 
        :clientInfo="client"
        :clientsList="clientsList"
        @removeClient="removeClient" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ClientsList from './components/ClientsList.vue'
import RegWindow from './components/RegWindow.vue'
import EditWindow from './components/EditWindow.vue'
export default {
  data() {
    return {
      flag: false,
      flagEditWindow: false,
      clientsList: [],
      client: {}
    }
  },
  name: 'App',
  components: {
    Header, RegWindow, ClientsList, EditWindow
  },
  methods: {
    openReg(f) {
      this.flag = f;
    },

    createClient(client) {
      this.clientsList = [...this.clientsList, client]
      this.flag = false
    },

    cancelClient(f) {
      this.flagEditWindow = f
      this.flag = f
      console.log(f)
    },

    editClient(client, flag) {
      this.flagEditWindow = flag
      this.client = client
    }
    ,
    removeClient(f, id) {
      this.clientsList = this.clientsList.filter(item => item.id !== id)
      this.flagEditWindow = f
    }
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

button {
  margin: 0;
  padding: 5px;
  min-width: 100px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid grey;
  cursor: pointer;
  border-radius: 4px;

}

input {
  padding: 0;
}

h1, h2, h3 {
  margin: 0;
  padding: 5px 0;
}

h1 {
  font-size: 24px;
}

p {
  margin: 0;
  padding: 0;
}

label {
    font-size: 14px;
}

.container {
  position: relative;
  max-width: 750px;
  margin: 0 auto;
}
.header {
  background-color: rgb(235, 238, 240);
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__title {
  color: rgb(49, 103, 173);
}
.main__info, .client {
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid grey;
}

.aboutClient {
  text-align: start;
  align-self: stretch;
  flex-shrink: 0;
}

.aboutClient + .aboutClient {
  border-left: 1px solid grey;
}
.aboutClient__name {
  width: 150px;
  padding: 5px 40px 5px 10px;
}

.aboutClient__email {
  width: 200px;
  padding: 5px 40px 5px 10px;
}

.aboutClient__providers {
  width: 180px;
  padding: 5px 40px 5px 10px;
}

.client__infoProviders {
  width: 181px;
}

.aboutClient__phone {
  width: 150px;
  padding: 5px 40px 5px 10px;
}

.aboutClient__edit {
  width: 63px;
  padding: 5px 40px 5px 10px;

}


.editBtn {
  color: blue;
  min-width: 63px;
  text-align: center;
  padding: 0;
  text-decoration: underline;
  background-color: transparent;
  border: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
