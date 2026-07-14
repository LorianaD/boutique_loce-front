import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
    private readonly API = 'http://localhost:8080/api/products';

    constructor(private http: HttpClient) {}

    // Récupère tous les produits
    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.API);
    }

    // Récupère un produit par son id
    getById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.API}/${id}`);
    }

    // Recherche par nom
    search(query: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.API}/search?q=${query}`);
    }
}
