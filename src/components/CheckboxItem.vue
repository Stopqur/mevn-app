<template>
    <li class="popUpClient__checkBoxItem">
        <input :id="index" type="checkbox" v-model="name">
        <div class="popUpClient__checkBoxItem">
            <label v-if="changeFlag" class="popUpClient__checkBoxContent" :for="index">{{ providerItem.name }}</label>
            <input v-else type="text" class="popUpClient__checkBoxContent" v-model="titleProvider">
        </div>
        <button v-if="changeFlag" @click.prevent="editText" class ="popUpClient__checkBoxBtn">
            <img class ="popUpClient__checkBoxIcon" src="../icons/notes.svg" alt="edit">
        </button>
        <button v-else  @click.prevent="saveText" class ="popUpClient__checkBoxBtn">
            <img class ="popUpClient__checkBoxIcon" src="../icons/saveChange.svg" alt="save">
        </button>
        <button @click.prevent="$emit('deleteProvider', index)" class ="popUpClient__checkBoxBtn">
            <img class ="popUpClient__checkBoxIcon" src="../icons/trash.svg" alt="delete">
        </button>
    </li>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            id: this.index,
            changeFlag: true,
            titleProvider: this.providerItem.name
        }
    },
    props: ['providersList','providerItem', 'index'],
    methods: {
        editText() {
            this.changeFlag = false
        },
        saveText() {
            this.providerItem.name = this.titleProvider
            this.changeFlag = true
        }
    }
    
    
}
</script>

<style>
    .popUpClient__checkBoxContent {
        padding-left: 3px;
    }


</style>