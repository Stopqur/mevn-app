<template>
    <ul v-if="providersList.length !== 0" class="popUpClient__checkbox"> 
        <CheckboxItem 
            v-for="item of providersList"
            v-bind:providerItem="item"
            v-bind:key="item.id"
            v-bind:index="item.id"
            v-bind:providersList="providersList"
            v-on:deleteProvider="deleteProvider"
        />
    </ul>    
</template>

<script>
import CheckboxItem from './CheckboxItem.vue'
export default {
    props: ['providersList'],
    components: {
        CheckboxItem
    },
    data() {
        return {
        
        }
    },
    methods: {
        deleteProvider(id) {
        this.$emit('deleteProvider', id)
    }
    }
}
</script>

<style>
    .popUpClient__checkbox {
        display: inline-block;
        margin: 15px 0 0 75px;
        padding: 10px 21px;
        border: 1px solid grey;
        border-radius: 2px;
    }

    .popUpClient__checkBoxItem + .popUpClient__checkBoxItem {
        margin-top: 10px;
    }

    .popUpClient__checkBoxItem {
        display: flex;
        align-items: center;
        min-height: 20px;
        width: 260px;
    }
    
    .popUpClient__checkBoxBtn {
        border: 0;
        padding: 0;
        min-width: 0;
        background-color: transparent;
    }

    .popUpClient__checkBoxBtn + .popUpClient__checkBoxBtn {
        margin-left: 5px;
    }

    .popUpClient__checkBoxIcon {
        width: 13px;
        height: 13px;
    }
    

</style>