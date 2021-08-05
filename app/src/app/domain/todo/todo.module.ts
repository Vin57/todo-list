import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TODO_ROUTES } from '../todo.routes';
import { TodoDetailsComponent } from './container/todo-details/todo-details.component';
import { TodoContainerComponent } from './container/todo-container.component';
import { EmptyPipe } from 'src/app/shared/pipes/empty.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './store/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo.effects';
import { STORE_ENTRY_TODOS } from 'src/app/shared/store/entries';

@NgModule({
  declarations: [TodoDetailsComponent, TodoContainerComponent, EmptyPipe],
  imports: [
    CommonModule,
    StoreModule.forFeature(STORE_ENTRY_TODOS, todosReducer),
    EffectsModule.forFeature([TodoEffects]),
    RouterModule.forChild(TODO_ROUTES),
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class TodoModule {}
