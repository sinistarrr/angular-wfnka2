export interface Todo {
  label: string;
  done: boolean;
  id: string;
  creationDate: number;
}

export interface TodoResponse {
  todos: Todo[];
}

export interface CreateTodo {
  label: string;
}
