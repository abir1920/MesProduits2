import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
@Injectable({
providedIn: 'root'
})
export class ProduitService {
produits : Produit[]; //un tableau de Produit
constructor() {
this.produits = [
{ idproduit : 1, nomproduit : "PC Asus", prixproduit : 3000.600, datecreation
: new Date("01/14/2011")},
{ idproduit : 2, nomproduit : "Imprimante Epson", prixproduit : 450, datecreation : new Date("12/17/2010")},
{ idproduit : 3, nomproduit :"Tablette Samsung", prixproduit : 900.123, datecreation : new Date("02/20/2020")}
];
}
listeProduits():Produit[] {
  return this.produits;
}
ajouterProduit( prod: Produit){
this.produits.push(prod);
}
}
