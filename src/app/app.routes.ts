import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./features/pages/home/home')
        .then(m => m.Home) 
    },
    ///// Auth routes here
    {
        path:'login',
        loadComponent: () => import('./shared/components/Authentcations/login/login')
        .then(m=>m.Login)
    },
    {
        path:'forget-password',
        loadComponent: () => import('./shared/components/Authentcations/forget-password/forget-password')
        .then(m=>m.ForgetPassword)
    },
    
];
