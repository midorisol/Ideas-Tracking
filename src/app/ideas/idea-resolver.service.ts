import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {empty, Observable} from 'rxjs';
import { IdeasService } from './ideas.service';
import { Idea } from './models/idea.model';

@Injectable({
  providedIn: 'root'
})
export class IdeaResolverService implements Resolve<Idea | undefined> {

  constructor(private ideasService: IdeasService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Idea | Observable<Idea> | Promise<Idea> | undefined {
    const id = route.queryParamMap.get('id') || route.paramMap.get('id');
    if (!id) {
      return undefined;
    }
    return this.ideasService.getIdea(id);
  }
}
