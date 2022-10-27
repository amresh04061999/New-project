import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth-Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanchildGuard implements CanActivate {
  constructor(private authSerivses:AuthService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isauth =this.authSerivses.isAuth()
      if(isauth){
        return true;
      }else{
        return false; 
      }
  }
  
}
