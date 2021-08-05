import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyState } from 'src/app/shared/store';
import {
  todoListArraySelector,
  todoListSelector,
} from 'src/app/shared/store/selectors';
import { Todo } from '../models/todo.model';
import {
  TodoFetchTodo,
  TodoCreateAction,
  TodoToggleAction,
  TodoDeleteAction,
} from '../store/todo.actions';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent implements OnInit {
  public form: FormGroup;
  public todos$: Observable<Todo[]> = this.store.pipe(
    select(todoListArraySelector)
  );

  constructor(private store: Store<MyState>, private fb: FormBuilder) {}

  /**
   * Accesseurs
   */
  get message(): FormControl {
    return this.form.get('message') as FormControl;
  }

  /**
   * Trigger
   */
  ngOnInit(): void {
    // Dispatch une action sur le Store
    this.store.dispatch(new TodoFetchTodo());
    this.formInit();
  }

  /**
   * Util functions
   */
  public formInit() {
    this.form = this.fb.group({
      message: [, Validators.required],
    });
  }

  /**
   * Business functions
   */
  public addTodo() {
    if (this.form.valid) {
      this.store.dispatch(
        new TodoCreateAction({
          message: this.message.value,
          done: false,
        })
      );
      this.message.setValue('');
    }
  }

  public toggleTodo(id: string) {
    this.store.dispatch(new TodoToggleAction(id));
  }

  public deleteTodo(id: string) {
    this.store.dispatch(new TodoDeleteAction(id));
  }
}
