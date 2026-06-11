import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { TranslateBtn } from '../../translate-btn/translate-btn';
import { TranslatePipe } from '@ngx-translate/core';
import { email, form, required } from '@angular/forms/signals';
import { loginser } from '../../../../core/services/auth/login';
import { Login } from '../../Authentcations/login/login';
import { Themes } from '../../themes/themes';

export interface NavItem {
  label: string;
  icon: string;
  routerLink?: string;
}
@Component({
  selector: 'app-sidebar-works',
  standalone: true,
  imports: [CommonModule ,Themes , RouterLink , RouterLinkActive ,RouterModule , TranslateBtn , TranslatePipe],
  templateUrl: './sidebar-works.html',
  styleUrl: './sidebar-works.css',
})
export class SidebarWorks    {

  @Input() isExpanded = true;
  @Output() toggleSidebar = new EventEmitter<void>();

  //#region declartions

  router=inject(Router);
  isAttendanceOpen =signal(false) ;
  ispayrollmangment=signal(false);
  isemployeemangment=signal(false);
  isrecuitmenrmangment=signal(false);
  performanceMangement=signal(false);
  leavesMangement=signal(false);
 //#endregion

  bottomNav: NavItem[] = [
    { label: 'Log out', icon: 'ti-logout' , routerLink: '/login' },
  ];
  
  toggle(): void {
    this.toggleSidebar.emit();
  }
 


  //#region logout hundeltion

  loginAuthser=inject(loginser)
  userlogin =this.loginAuthser.userlogin
  logout(){
     this.router.navigate(['/login'])
     localStorage.removeItem('user')
     this.loginAuthser.user.set(null)
     this.userlogin.set(false)
  }
  //#endregion
}