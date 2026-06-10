import { Component, signal } from '@angular/core';
import { HelpComponent } from '../../../shared/components/pages/help/help';
import { debounce } from 'rxjs';

@Component({
  selector: 'app-help',
  imports: [HelpComponent],
  templateUrl: './help.html',
  styleUrl: './help.css',
})
export class Help {}
