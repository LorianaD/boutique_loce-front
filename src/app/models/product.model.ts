// Interface principale — correspond au JSON de l'API Java
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
}

// Interface pour un article dans le panier
// export interface ArticlePanier {
//     product: Product;
//     quantity: number;
// }

// Type utilitaire : Produit sans id (pour la création)
export type NewProduct = Omit<Product, 'id'>;