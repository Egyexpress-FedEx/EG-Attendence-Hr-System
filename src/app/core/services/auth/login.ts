import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class loginser {
   private readonly platformid = inject(PLATFORM_ID)
   userlogin=signal<boolean>(false)
  constructor() {
    if(!isPlatformBrowser(this.platformid)) return ;
    const user = localStorage.getItem('user');

    if (user) {
      this.user.set(JSON.parse(user));
      this.userlogin.set(true);
    }
  }

  private fakeUser ={
    email:'ahmed@test.com',
    password:'Aa12345@'
  }

  user=signal<any>(this.getuserform())

  login(email:string , password:string):boolean{
    if(
      email===this.fakeUser.email &&
      password===this.fakeUser.password
    )
    {
         const user={
          email:this.fakeUser.email,
          token:'fake-token-123'
         };
         this.user.set(user)
         localStorage.setItem('user',JSON.stringify(user))

         return true
    }
    return false
  }


  logout(){
    this.user.set(null)
    localStorage.removeItem('user')
  }

  private getuserform(){
    if(!isPlatformBrowser(this.platformid)) return ;
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null
  }
}
