import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-produse-cautare',
  templateUrl: './produse-cautare.component.html',
  styleUrls: ['./produse-cautare.component.css']
})
export class ProduseCautareComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductList:any=[];
  Categorie:any;
  Producator:any;
  ID:any;
  Ordonare:any;
  filtru = {
    id: '',
    categorie: '',
    producator: '',
    ordine: ''
  };

  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList(){
    this.service.getProdList().subscribe(data=>
      {
        this.ProductList=data;
      });
  }

  filtruProduse(){
    if (this.Categorie="Aparate")
        this.filtru.categorie=this.Categorie;
    if (this.Categorie="Actionari")
        this.filtru.categorie=this.Categorie; 

    if (this.Producator="3M")
        this.filtru.producator=this.Producator;
        if (this.Producator="AEM")
        this.filtru.producator=this.Producator;
    if (this.Ordonare === 'crescator') {
          this.filtru.ordine = '1';
        }
    if (this.Ordonare === 'descrescator') {
        this.filtru.ordine = '0';
        }
    this.filtru.id=this.ID;
  }
  

}
