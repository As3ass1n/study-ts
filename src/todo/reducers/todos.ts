interface IActionType {
  type: string;
  value: string;
}

const todos = (state: any[] = [], action: IActionType) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          completed: false,
          value: action.value
        }
      ];
    default:
      return state;
  }
};

export default todos;
