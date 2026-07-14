import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { RouterLink } from "@angular/router";
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, RouterLink, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{
  products: Product[] = [];
  loading = true;
  error = false;

  constructor(
    private productService: ProductService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void
  {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;

        this.changeDetectorRef.markForCheck();
      },

      error: () => {
        this.error = true;
        this.loading = false;

        this.changeDetectorRef.markForCheck();
      }
    });
  }

}
