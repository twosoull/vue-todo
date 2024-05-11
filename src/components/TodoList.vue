<template>
    <div>
      <TransitionGroup name="list" tag="ul">
          <li v-for="(todoItem,index) in storedTodoItems" 
              v-bind:key="index"
              class="shadow">{{ todoItem.item }}
            <button v-on:click="removeTodo({todoItem, index})" class="removeBtn"> <!--1개의 인자기 때문에 오브젝트로 묶어서 보낸다.-->
              <i class="removeBtn fas fa-trash-alt"></i>
            </button>
            <button @click="toggleClear({todoItem, index})">clear</button>
            <span v-if="todoItem.completed">good!</span>
          </li>
      </TransitionGroup>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
    methods : {
        ...mapMutations({
          removeTodo : 'removeOneItem',
          toggleClear : 'toggelOneItem',
        }), 
        //컴포넌트내의 함수명, 스토어 함수명
        //인자를 입력하지 않아도 암묵적으로 보낸다.
    },
    computed : {
      // todoItems(){
      //   return this.$store.getters.storedTodoItems
      // }
      //...mapState(['todoItems'])
      ...mapGetters(['storedTodoItems'])
      
      //
      // ...mapGetters({
      //   todoItems : 'storedTodoItems'
      // })
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
