// RandomUser.ts
import axios from 'axios';

export async function fetchTodoList(){
    try{
        const res = await axios.get("http://localhost:3000/todos")
        const todos = res.data
        console.log(todos)
        return todos
    }catch(error){
        throw new Error('Error fetching todolist data!')
    }
}
