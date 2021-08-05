import { Params } from '@angular/router';

export interface MyRouterState {
  url: string;
  params: Params; // Params is just a simple key: value object
  queryParams: Params;
}
