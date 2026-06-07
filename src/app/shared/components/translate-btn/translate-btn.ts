import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-translate-btn',
  imports: [],
  templateUrl: './translate-btn.html',
  styleUrl: './translate-btn.css',
})
export class TranslateBtn {
  currentLang = signal<'en' | 'ar'>('en');

  toggleLanguage(): void {
    const lang = this.currentLang() === 'en' ? 'ar' : 'en';

    this.currentLang.set(lang);

    localStorage.setItem('lang', lang);

    // هنا هتحطي ngx-translate بعدين
    // this.translateService.use(lang);
  }
}
