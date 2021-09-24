<template>
    <div class="popUpClient">
        <header class="popUpClient__header">
          <h1 class="header__title">New Client</h1>
        </header>
        <section class="popUpClient__main">
          <form class="popUpClient__form" action="">
            <div class="popUpClient__wrapper">
                <div class="popUpClient__formList">
                    <div class="form">
                        <label for="inputName" class="form__title">Name:</label>
                        <input id="inputName" class="form__input" type="text" v-model="form.name">
                    </div>
                    <div class="form">
                        <label for="inputEmail" class="form__title">Email:</label>
                        <input id="inputEmail" class="form__input" type="text" v-model="form.email">
                    </div>
                    <div class="form">
                        <label for="inputPhone" class="form__title">Phone:</label>
                        <input id="inputPhone" class="form__input" type="text" v-model="form.phone">
                    </div>
                    <div class="form">
                        <label for="inputProvider" class="form__title">Provider:</label>
                        <input id="inputProvider" class="form__input form__input_width" type="text" v-model="form.provider">
                        <button class="form__btn" v-on:click.prevent="addProvider">Add provider</button>
                    </div>
                </div>    
                <Checkbox 
                
                    v-bind:providersList="providersList" 
                    v-on:deleteProvider="deleteProvider"
                />
            </div>
            <div class="popUpClient__footer">
                <button class="popUpClient__btnCancel" v-on:click.prevent="cancelClient">Cancel</button>
                <button class="popUpClient__btnSave" v-on:click.prevent="saveClient">
                    Save Client
                </button>
                <!-- <button class="popUpClient__btnDelete">Delete Client</button> -->
            </div>
          </form>  
        </section>
      </div>
</template>
<script>
import Checkbox from './Checkbox.vue'
export default {
    components: {
        Checkbox
    },
    data() {
        return {
            flagNewClient: false,
            form: 
                {name: '', 
                email: '', 
                phone: '',
                provider: ''
            },
            providersList: []
            
            
        }
    },
    methods: {
        saveClient() {
            if (this.form.name !== '' && this.form.email !== '' && this.form.phone !== '' ) {
                const newClient = {
                        id: Date.now(),
                        name: this.form.name,
                        email: this.form.email,
                        phone: this.form.phone,
                        providers: this.providersList

                    }
                this.$emit('createClient', newClient)
            }
            console.log(this.form.provider)
        },
        cancelClient() {
            this.$emit('cancelClient', this.flagNewClient)
        },
        addProvider() {
            if (this.form.provider !== '') {
                const newProvider = {
                    id: Date.now(),
                    name: this.form.provider
                }
                this.providersList = [...this.providersList, newProvider]
                this.form.provider = ''
            }
            // console.log(this.form.provider)
        },
        deleteProvider(id) {
            this.providersList = this.providersList.filter(item => item.id !== id)
        }
        
        // closePopUp(e) {
        //         e.view.blur()
        //         console.log(e.view.blur)
        // }
    }

}
</script>

<style>
    .popUpClient {
        top: -30px;
        left: calc(50% - 300px);
        position: absolute;
        max-width: 600px;
        margin: 0 auto;
        background-color: #fff;
        border: 2px solid grey;
    }
    
    .popUpClient__header {
        text-align: start;
        padding: 0 10px;
        border-bottom: 1px solid grey;
    }

    .popUpClient__main {
        margin-top: 10px;
    }

    .popUpClient__wrapper {
        padding: 0 100px 20px 100px;
        text-align: start;

    }

    .form + .form {
        margin-top: 15px;
    }

    .form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }   

    .form__title {
        width: 71px;
        font-weight: bold;
        text-align: end;
    }

    .form__input {
        margin-left: 5px;
        padding: 3px;
        width: 82%;
        border-radius: 2px;
        border: 1px solid #000;
    }

    .form__input_width {
        width: 48%;
    }

    .form__btn {
        margin-left: 24px;
    }

    .popUpClient__footer {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    .popUpClient__btnDelete {
        background-color: red;
    }

    .popUpClient__btnSave {
        margin-left: 30px;
    }
    /* .visually-hidden {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
    }  */
    
</style>