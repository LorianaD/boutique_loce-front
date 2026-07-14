import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit
{
  product: Product | null = null;
  chargement = true;

  constructor(
    private route: ActivatedRoute,   // ← lire les paramètres de l'URL
    private router: Router,          // ← naviguer vers une autre page
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getById(id).subscribe({
        next: (data) => {
            this.product = data;
            this.chargement = false;
        },
        error: () => {
            // Produit non trouvé → retour à la liste
            this.router.navigate(['/']);
        }
    });
  }

  // ajouterAuPanier(): void {
  //   if (this.product) {
  //     this.panierService.ajouter(this.produit);
  //     this.router.navigate(['/panier']); // → redirige vers le panier
  //   }
  // }
}
