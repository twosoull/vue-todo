import { createStore } from "vuex";

const storage = {
    item(){
        const arr = [];
        if(localStorage.length > 0){     
            for(var i = 0; i < localStorage.length; i++){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); 
            }
        }
        return arr;
    }
}

export const store = createStore({
    state: {
        todoItems : storage.item()
    },
    getters: {
        storedTodoItems(state){
            return state.todoItems
        }
    },
    mutations : {
        addOneItem(state,todoItem){
            var obj = {completed : false , item : todoItem};
            localStorage.setItem(todoItem,JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state,payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggelOneItem(state, payload){
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item,JSON.stringify(payload.todoItem));
        },
        clearTodoItems(state){
            localStorage.clear();
            state.todoItems = [];
        }
    },
    
})