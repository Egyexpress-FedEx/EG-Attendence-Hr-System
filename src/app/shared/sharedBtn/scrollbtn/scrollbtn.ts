import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrollbtn',
  imports: [CommonModule],
  templateUrl: './scrollbtn.html',
  styleUrl: './scrollbtn.css',
})
export class Scrollbtn {
  showBtn = false ; 
  @HostListener('window:scroll', [])
  onWindowScroll(){
    const scroly = window.scrollY || document.documentElement.scrollTop ;
    this.showBtn = scroly > 200 

  }
  
    scrolTop(){
      window.scrollTo({
        top : 0 ,
        behavior : 'smooth'
      })
    }
}
