import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { MyRouterState } from './models/my-router-state.model';

/**
 * Explain to RouterReducerState how to handle MyRouterState
 */
export class MyRouterSerialize implements RouterStateSerializer<MyRouterState> {
  serialize(routerState: RouterStateSnapshot): MyRouterState {
    // Prend l'élément url de routerState
    const { url } = routerState;
    // Prend l'élément queryParams de routerState (RouterStateSnapshot.getRoot<ActivatedRouteSnapshot>()).
    // L'élément queryParams est partagé par toutes les routes, et est donc le même quelque soit la route où l'on se place
    const { queryParams } = routerState.root;
    // Récupère l'activated route de la racine (root).
    let rootActivatedRouteSnapshot: ActivatedRouteSnapshot = routerState.root;

    // Descend jusqu'au dernier enfant de rootActivatedRouteSnapshot
    let lastChild: ActivatedRouteSnapshot = rootActivatedRouteSnapshot;
    while (lastChild.firstChild) {
      lastChild = lastChild.firstChild;
    }
    // Récupère le params du dernier enfant
    const { params } = lastChild;

    return {
      url,
      params,
      queryParams,
    };
  }
}
