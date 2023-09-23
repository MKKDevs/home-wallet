import axios from 'axios';


export const fetchAllTodos = async () => {
   return axios.get('/todos')
      .then((res) => res.data);
}

export const createTodo = async (name: string) => {
   return axios
            .post('/todo', { name: name })
            .then((res) => res.data);
}

export const removeTodo = async (id: number) => {
   return axios
            .post(`/todo/${id}`)
            .then((res) => res.data);
}

export const editTodo = async (id: number, name: string) => {
   return axios
            .post(`/edit/${id}`, { name: name })
            .then((res) => res.data);
}