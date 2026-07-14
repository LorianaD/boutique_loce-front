import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
    {
        // Page d'accueil
        path: "", 
        component: Homepage,
    },
    {
        // Page liste des produits
        path: "products",
        component: Products,
    },
    {
        // Page détail → /produits/1, /produits/2...
        path: "products/:id",
        component: ProductDetail,
    },

    // Toute URL inconnue → retour à l'accueil
    { path: '**',             redirectTo: '' }
];
