import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth-Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanDectiveGuard implements CanDeactivate<unknown> {
  constructor(private authServices:AuthService){}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isauth =this.authServices.isAuth()
      if(isauth){
        return true;
      }else{
        return false; 
      }
    }
}
