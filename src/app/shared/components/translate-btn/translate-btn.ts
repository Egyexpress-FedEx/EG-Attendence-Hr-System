import { Component, inject, signal } from '@angular/core';
import { Translation } from '../../../core/services/translation';

@Component({
  selector: 'app-translate-btn',
  imports: [],
  templateUrl: './translate-btn.html',
  styleUrl: './translate-btn.css',
})
export class TranslateBtn {
  translate = inject(Translation);

}
