import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Products } from './pages/products/products';

export const routes: Routes = [
    {
        path: "", 
        component: Homepage,
    },
    {
        path: "products",
        component: Products,
    },
];
