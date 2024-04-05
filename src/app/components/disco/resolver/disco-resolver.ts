import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { Disco } from '../../../models/disco.model';
import { DiscoService } from '../../../services/disco.service';

export const discoResolver: ResolveFn<Disco> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(DiscoService).buscar(route.paramMap.get('id')!);
    }
