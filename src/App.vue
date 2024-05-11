<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propData="todoItems" v-on:removeItem="removeOneItem"
    v-on:toggleItem="toggelOneItem"></TodoList>
    <TodoFooter v-on:clearTodo="clearTodoItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';


export default {
  name: 'App',
  data(){
        return{
            todoItems : []
        }
    },
  methods : {
    // addOneItem(newTodoItem){
    //   var obj = {completed : false , item : newTodoItem};
    //     localStorage.setItem(newTodoItem,JSON.stringify(obj));
    //     this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem,index){
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // toggelOneItem(todoItem , index){
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    // },
    // clearTodoItems(){
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },
  data(){
        return{
            todoItems : []
        }
    },
  components : {
    TodoFooter,
    TodoInput,
    TodoHeader,
    TodoList
  }
}
</script>

<style>
body{
  text-align : center;
  background-color: #F6F6F6;
}

input{
  border-style : groove;
  width: 200px;
}
button {
  border-style : groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
