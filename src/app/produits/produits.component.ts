import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits : Produit[]; //un tableau de chaînes de caractères

  constructor() {
    this.produits = [
      {idproduit : 1, nomproduit : "pc Asus", prixproduit : 3000.600, datecreation : new Date("01/14/2011")},
      {idproduit : 2, nomproduit : "Imprimante Epson", prixproduit : 450, datecreation : new Date("12/17/2010")},
      {idproduit : 3, nomproduit : "Tablette Samsung", prixproduit : 900.123, datecreation : new Date("02/20/2020")}
    ]; 
  }

  ngOnInit(): void {

  }

}
