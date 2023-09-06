import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetailsGuardService implements CanActivate{

  constructor(private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
    const temp =  JSON.parse(localStorage.getItem("moiveDetails"));
    if(temp){
      return true;
    }
    return this.router.createUrlTree(['/Catalog']);

    // return this.router.createUrlTree(['']);
  }
}