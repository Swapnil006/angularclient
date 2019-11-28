import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{
  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.IsloggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login'])
    return false;
    }
}

  IsloggedIn()
{
  if(window.sessionStorage.getItem("active")!=null
  &&
  window.sessionStorage.getItem("active")=="1")
  {
    return true;
  }
}
  
CheckUser(userdetails)
{
  if(userdetails.uname == "abc"
  &&
  userdetails.password == "abc@123")
  {
    window.sessionStorage.setItem("active","1");
    return true;
  }
  else
  {
    return false;
  }
}

signOut()
{
  window.sessionStorage.setItem("active","0");
}

}
