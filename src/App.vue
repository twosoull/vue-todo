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
  data : function(){
        return{
            todoItems : []
        }
    },
  methods : {
    addOneItem : function(newTodoItem){
      var obj = {completed : false , item : newTodoItem};
        localStorage.setItem(newTodoItem,JSON.stringify(obj));
        this.todoItems.push(obj);
    },
    removeOneItem : function(todoItem,index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggelOneItem : function(todoItem , index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    },
    clearTodoItems : function(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created : function(){
        if(localStorage.length > 0){
            console.log(localStorage.length);            
            for(var i = 0; i < localStorage.length; i++){
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                console.log(localStorage.key(i));   
            }
        }
    },
  data : function(){
        return{
            todoItems : []
        }
    },
  components : {
    'TodoFooter' : TodoFooter,
    'TodoInput' : TodoInput,
    'TodoHeader' : TodoHeader,
    'TodoList' : TodoList
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
