import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-themes',
  imports: [],
  templateUrl: './themes.html',
  styleUrl: './themes.css',
})
export class Themes implements OnInit {
    isDarkTheme = signal(false);

  ngOnInit(): void {
   if (typeof window !== 'undefined') {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.isDarkTheme.set(true);
      document.body.classList.add('dark-theme');
    }

  }
  
}

//#region  dark mode
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
  //#endregion
}
