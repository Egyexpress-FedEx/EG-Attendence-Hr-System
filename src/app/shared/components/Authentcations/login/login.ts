import { Component, signal, OnInit, inject } from '@angular/core';
import { form, required, email, FormField } from '@angular/forms/signals';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { loginser } from '../../../../core/services/auth/login';
import { FormsModule} from '@angular/forms';
import { SidebarWorks } from '../../sidebar/sidebar-works/sidebar-works';
import { TranslateBtn } from '../../translate-btn/translate-btn';
import { Themes } from '../../themes/themes';

@Component({
  selector: 'app-login',
  imports: [RouterModule, RouterLink, TranslatePipe, FormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
loginService = inject(loginser)
router= inject(Router)
 email = '' ;
 password = '' ;
    
    loginsubmit(){
        const succsees = this.loginService.login(this.email , this.password);
        if(succsees){
          this.router.navigate(['/Dashboard'])
          this.loginService.userlogin.set(true)
        }else{
          this.router.navigate(['/login'])
        }
    }

   
}
