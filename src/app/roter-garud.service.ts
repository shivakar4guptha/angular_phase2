import { Injectable } from '@angular/core';
import {Router, RouterStateSnapshot,ActivatedRouteSnapshot,Route, CanActivate} from '@angular/router';
import { AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoterGarudService implements CanActivate {

  constructor(private authServ:AuthService, private router:Router) { }

  canActivate(activatedRouteSnapshot:ActivatedRouteSnapshot){
    // if(this.authSer.isLoggedIn()){
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // } 
    // return true;
    if(this.authServ.validateUser()){
      //debugger;
      return this.authServ.validateUser();
    }
    else{
      this.router.navigate(['/testComp']);
    }
    //return  this.authServ.validateUser();
   
  }
 
}
