export const addTodo = (text: string) => {
  console.log(text);
  return {
    type: 'ADD_TODO',
    value: text,
  };
};


const deleteTodo = () => {
  return {
    type: 'DELETE_TODO'
  }
}