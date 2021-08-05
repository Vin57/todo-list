import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TODO_ROUTES } from '../todo.routes';
import { TodoDetailsComponent } from './container/todo-details/todo-details.component';
import { TodoContainerComponent } from './container/todo-container.component';
import { EmptyPipe } from 'src/app/shared/pipes/empty.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoDetailsComponent, TodoContainerComponent, EmptyPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(TODO_ROUTES),
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class TodoModule {}
