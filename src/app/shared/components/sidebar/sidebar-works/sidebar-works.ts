import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
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
export class SidebarWorks  implements OnInit {
  

ngOnInit(): void {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    this.isDarkTheme.set(true);
    document.body.classList.add('dark-theme');
  }
}
  @Input() isExpanded = true;
  @Output() toggleSidebar = new EventEmitter<void>();

  isDarkTheme = signal(false);
  router=inject(Router)

  mainNav: NavItem[] = [
    { label: 'Dashboard', icon: 'ti-layout-dashboard', routerLink: '/dashboard' },
    { label: 'Home', icon: 'ti-home', routerLink: '/home' },
    { label: 'Finger Print', icon: 'ti-fingerprint', routerLink: '/finger-print' },
    { label: 'Finger  Device', icon: 'ti-device-imac', routerLink: '/finger-device' },
    { label: 'Help', icon: 'ti-help-circle', routerLink: '/help' },
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
     if (dark) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
  }
  logout(){
     this.router.navigate(['/login'])
  }

  
}