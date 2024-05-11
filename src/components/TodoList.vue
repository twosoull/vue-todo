<template>
    <div>
      <TransitionGroup name="list" tag="ul">
          <li v-for="(todoItem,i) in this.$store.state.todoItems" v-bind:key="i"
            class="shadow">{{ todoItem.item }}
            <button v-on:click="removeTodo(todoItem, i)" class="removeBtn">
              <i class="removeBtn fas fa-trash-alt"></i>
            </button>
            <button v-on:click="toggleClear(todoItem,i)">clear</button>
            <span v-if="todoItem.completed">good!</span>
          </li>
      </TransitionGroup>
    </div>
</template>

<script>
export default {
    methods : {
        removeTodo(todoItem,index){
          //this.$emit('removeItem',todoItem,index);
          this.$store.commit('removeOneItem',{todoItem, index});
        },
        toggleClear(todoItem,index){
          //this.$emit('toggleItem',todoItem,index);
          console.log(index);
          this.$store.commit('toggelOneItem', {todoItem, index});
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
.list-enter-active, .list-leave-active{
  transition : all 1s;
}
.list-enter-from, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>
