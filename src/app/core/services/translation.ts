import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type language = 'en' |  'ar' ; 

@Injectable({
  providedIn: 'root',
})
export class Translation {
  private readonly translateService = inject(TranslateService)
  private readonly platformid = inject(PLATFORM_ID)
 currentLang = signal<language>('en')
 
  //first step method to change lang + save it in localstorage

  switclangg(lang:language):void{
    if(!isPlatformBrowser(this.platformid)) return ;
      this.translateService.use(lang)
      localStorage.setItem('lang',lang)
      this.currentLang.set(lang)
      //this.setDirection(lang)
  }

  // second step method to get lang from local storage

  init():void{
  if(!isPlatformBrowser(this.platformid)) return ;
  const lang =  (localStorage.getItem('lang') ?? 'en') as language;
  this.switclangg(lang)
  }

 // third step app direction --> cuurent this method disable 

//   private setDirection(lang:language){
//     const dir = lang === 'en' ? 'ltr' : 'rtl' ;
//     document.documentElement.dir=dir;
//     document.documentElement.lang=lang;
//   }
 }
