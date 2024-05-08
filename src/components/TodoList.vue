<template>
    <div>
        <ul>
            <li v-for="(todoItem,i) in todoItems" v-bind:key="i"
            class="shadow">{{ todoItem }}
            <button v-on:click="removeTodo(todoItem, i)" class="removeBtn">
                <i class="removeBtn fas fa-trash-alt"></i>
            </button>
        </li>
        </ul>
    </div>
</template>

<script>
export default {
    data : function(){
        return{
            todoItems : []
        }
    },
    created : function(){
        if(localStorage.length > 0){
            console.log(localStorage.length);            for(var i = 0; i < localStorage.length; i++){
                this.todoItems.push(localStorage.key(i))
                console.log(localStorage.key(i));   
            }
        }
    },
    methods : {
        removeTodo : function(todoItem,index){
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        }
    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
