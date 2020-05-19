import { Movie } from 'src/app/Models/app.movie';
import { Logic } from 'src/app/Models/app.logic';
import { Categories } from 'src/app/Models/app.constants';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { HttpService } from 'src/app/Services/app.http.service';
import { CustomValidator } from '../MoviesReactive/app.custom.validator';
import { Product } from 'src/app/Models/app.models';

@Component({
    selector: 'app-productreactiveform-component',
    templateUrl: './app.productreactiveform.view.html'
})

export class ProductReactiveFormComponent implements OnInit {
    prd: Product;
    prds: Array<Product>; 
    headers: Array<string>;
    searchText : string;
    selectedPrd: Product;
    isExistingPrd : boolean;
    frmPrd : FormGroup;
    constructor(private serv: HttpService) {
        this.prd = new Product(0,'','','','','',0);
        this.prds = new Array<Product>();
        this.headers  =new Array<string>();
        this.searchText = "";
        this.selectedPrd = null;
        this.isExistingPrd = false;
        this.frmPrd = new FormGroup({
            ProductRowId : new FormControl(this.prd.ProductRowId),
            ProductId : new FormControl(this.prd.ProductId, Validators.compose([
               CustomValidator.isNotUnique
            ])),
            ProductName : new FormControl(this.prd.ProductName, Validators.compose([
               CustomValidator.isWithSpecialChars, CustomValidator.isNotFirstCharCapital
            ])),
            Manufacturer : new FormControl(this.prd.Manufacturer),
            Description : new FormControl(this.prd.Description),
            CategoryName : new FormControl(this.prd.CategoryName),            
            BasePrice : new FormControl(this.prd.BasePrice) 
        });
    }  

    getClasses(value:boolean): any{
        return {            
            'border-danger': value,
        };
    }

    setCategory(cat : string) :void{
        this.frmPrd.controls["CategoryName"].setValue(cat);
    }

    ngOnInit() : void{
        this.serv.get().subscribe((data)=>{
            this.prds = data
        },(error)=> {console.log(JSON.stringify(error))});
        for(let field in this.prd){
            this.headers.push(field);
        }
    }

    clear() : void{
        this.frmPrd.setValue(new Product(0,'','','','','',0));
        this.isExistingPrd = false;
        this.selectedPrd = null;
    }

    save(): void{
        if(this.isExistingPrd){
            this.serv.put(this.frmPrd.value.ProductRowId, this.frmPrd.value).subscribe((data)=>{                
               for(let i=0;i<this.prds.length;i++){
                    if(this.prds[i].ProductRowId == this.frmPrd.value.ProductRowId){
                        this.prds[i] = Object.assign({},this.frmPrd.value);
                    }
                }
            });          
        }
        else{
            this.serv.post(this.frmPrd.value).subscribe((data)=>{
                this.prds.push(data);
            });
        }
    }

    getSelectedPrd(prd:Product): void{
        //this.frmPrd.setValue(prd);
        this.serv.getById(prd.ProductRowId).subscribe((data)=>{
            this.frmPrd.setValue(data);
        })
        this.isExistingPrd = true;
        this.selectedPrd = prd;
    }

    deleteRow(product:Product): void{        
        this.serv.delete(product.ProductRowId).subscribe((data)=>{
            var prdIndex = this.prds.findIndex((prd:Product,index:number )=>prd.ProductRowId == product.ProductRowId);
            console.log(prdIndex);
            if(prdIndex != -1){
                this.prds.splice(prdIndex,1);
            }            
        });
    }

    sort():void{
        this.prds = this.prds.sort((prd1: Product, prd2:Product)=>{
            return prd1.ProductName < prd2.ProductName ? -1 : 1
        });       
    }

    reverseSort():void{
        this.prds = this.prds.sort((prd1: Product, prd2:Product)=>{
            return prd1.ProductName > prd2.ProductName ? -1 : 1
        });
    }

    // searchPrd():void{
    //     if(this.searchText.trim() != ""){
    //         this.prds = this.logic.SearchMovies(this.searchText);
    //     }            
    // }
}