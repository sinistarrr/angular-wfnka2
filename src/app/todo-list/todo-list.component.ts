declare var M: any;
import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  inputValue: string = '';

  addTodoItem() {
    this.todoService
      .createTodo(this.inputValue)
      .subscribe((hasTodoBeenCreated) => {
        if (hasTodoBeenCreated) {
          this.refreshTodos();
        } else {
          alert('Erreur serveur');
        }
      });
  }

  private refreshTodos() {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  notifyUserTodoUpdated(todo: Todo) {
    M.toast({ html: `La tache ${todo.label} a été mise à jour` });
    this.todoService.updateTodo(todo);
    this.refreshTodos();
  }

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.refreshTodos();
  }
}
