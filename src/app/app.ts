import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarWorks } from './shared/components/sidebar/sidebar-works/sidebar-works';
import { Scrollbtn } from './shared/sharedBtn/scrollbtn/scrollbtn';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , SidebarWorks , Scrollbtn],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('HrSystem');
isExpanded = true;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
