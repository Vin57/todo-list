import { Routes } from '@angular/router';
import { TodoContainerComponent } from './todo/container/todo-container.component';
import { TodoDetailsComponent } from './todo/container/todo-details/todo-details.component';

export const TODO_ROUTES: Routes = [
  {
    path: '',
    component: TodoContainerComponent,
    children: [
      {
        path: ':id',
        component: TodoDetailsComponent,
      },
    ],
  },
];
