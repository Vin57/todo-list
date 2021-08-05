import { Routes } from '@angular/router';
import { NotFoundComponent } from './domain/not-found/not-found.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  {
    path: 'todo-list',
    loadChildren: () =>
      import('./domain/todo/todo.module').then((m) => m.TodoModule),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];
