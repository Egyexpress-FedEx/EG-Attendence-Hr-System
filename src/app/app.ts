import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarWorks } from './shared/components/sidebar/sidebar-works/sidebar-works';
import { Scrollbtn } from './shared/sharedBtn/scrollbtn/scrollbtn';
import { loginser } from './core/services/auth/login';
import { Login } from './shared/components/Authentcations/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , SidebarWorks , Scrollbtn , Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HrSystem');
  isExpanded = true;
  viewFromlogin=inject(loginser)
  viewiflogin=this.viewFromlogin.userlogin

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
