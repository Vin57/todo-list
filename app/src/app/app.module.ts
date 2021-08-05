import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './domain/todo/store/todo.effects';
import { reducers } from './shared/store';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { NotFoundComponent } from './domain/not-found/not-found.component';
import { MyRouterSerialize } from './shared/store/my-router.serializer';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      name: 'todo app',
    }),
    RouterModule.forRoot(APP_ROUTES),
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: MyRouterSerialize,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
