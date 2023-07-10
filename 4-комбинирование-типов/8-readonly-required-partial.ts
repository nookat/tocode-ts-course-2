interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: number;
}

type ReadOnlyTodo = Readonly<Todo>; // делает все значения поля readonly

type PartialTodo = Partial<Todo>; // делает все поля необязательными

function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo): Todo {
  return {...todo, ...fieldsToUpdate};
}

type RequiredTodo = Required<Todo>; // делает все поля обязательными

export {}