import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

export interface NavItem {
  label: string;
  icon: string;
  routerLink?: string;
}

@Component({
  selector: 'app-sidebar-works',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterLinkActive ,RouterModule],
  templateUrl: './sidebar-works.html',
  styleUrl: './sidebar-works.css',
})
export class SidebarWorks {
  @Input() isExpanded = true;
  @Output() toggleSidebar = new EventEmitter<void>();

  isDarkTheme = signal(false);
  router=inject(Router)

  mainNav: NavItem[] = [
    { label: 'Dashboard', icon: 'ti-layout-dashboard',},
    { label: 'Home', icon: 'ti-home', routerLink: '/home' },
    { label: 'Help', icon: 'ti-help-circle' },
    { label: 'Login', icon: 'ti-login',routerLink: '/login' ,},
  ];

  bottomNav: NavItem[] = [
    
    { label: 'Log out', icon: 'ti-logout' , routerLink: '/login' },
  ];
  

  toggle(): void {
    this.toggleSidebar.emit();
  }


  setTheme(dark: boolean): void {
    this.isDarkTheme.set(dark);
  }
  logout(){
     this.router.navigate(['/login'])
  }
}