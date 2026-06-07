import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-helpComp',
 // standalone: true,
  imports: [TranslatePipe],
  templateUrl: './help.html',
  styleUrl: './help.css',
})
export class HelpComponent {
  constructor(private translate: TranslateService) {
    console.log('Current Lang:', this.translate.currentLang);

    this.translate.get('Need More Help?').subscribe(res => {
      console.log('Translation =>', res);
    });
  }
}
