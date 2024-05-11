<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
        <!-- use the modal component, pass in the prop -->
        <Modal v-if="showModal" @close="showModal = false">
        
            <!--
        you can use custom content here to overwrite
        default content
        -->
        <template v-slot:header>
            경고
            <button @click="close">닫기</button>
        </template>
        <template v-slot:body>
            무언가를 입력하세요.
        </template>
        <template v-slot:footer>
            d
        </template>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    data(){
        return{
            newTodoItem : "",
            showModal : false
        }

    },
    methods : {
        addTodo(){
            if(this.newTodoItem != ''){
                //this.$emit('addTodoItem',this.newTodoItem);
                this.$store.commit('addOneItem',this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = '';
        },
        close(){
            this.showModal = !this.showModal;
        }
    },
    components : {
        Modal
    }
}
</script>

<style scoped>
input:focus{
    outline : none;
}
.inputBox {
    background : white;
    height: 50px;
    line-height: 50px;ßßßer-radius : 5px;
}
.inputBox input{
    background : none;
    font-size: 0.9rem;
}
.addContainer {
    float : right;
    background : linear-gradient(to right, #6478FB, #8763FB);
    display : block;
    width : 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
</style>
