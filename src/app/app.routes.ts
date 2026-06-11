
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Dashboard',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./features/pages/home/home')
        .then(m => m.Home) 
    },
    {
        path: 'Dashboard',
        loadComponent: () => import('./features/pages/dashboard/dashboard')
        .then(m => m.Dashboard) 
    },
    {
        path: 'attendance',
        loadComponent: () => import('./features/pages/attendance/attendance')
        .then(m => m.Attendance) 
    },
    {
        path: 'Fingerprint',
        loadComponent: () => import('./features/pages/finger-print/finger-print')
        .then(m => m.FingerPrint) 
    },
    {
        path: 'FingerDevice',
        loadComponent: () => import('./features/pages/finger-device/finger-device')
        .then(m => m.FingerDevice) 
    },
    {
        path: 'Help',
        loadComponent: () => import('./features/pages/help/help')
        .then(m => m.Help) 
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
