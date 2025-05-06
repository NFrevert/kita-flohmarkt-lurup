import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: 'Home',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'Seller',
        loadComponent: () => import('./seller/seller.component').then(c => c.SellerComponent)
    },
    {
        path: 'Impressum',
        loadComponent: () => import('./impressum/impressum.component').then(c => c.ImpressumComponent)
    },
    {
        path: 'Datenschutz',
        loadComponent: () => import('./datenschutz/datenschutz.component').then(c => c.DatenschutzComponent)
    }
];
