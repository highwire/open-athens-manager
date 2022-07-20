// import { Component, OnInit } from '@angular/core';
import {HTTPService } from '../../../services/http.service';
import { BaseService } from '../../../services/base.service';
import { Component, OnInit,Inject } from '@angular/core';

import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  currency=[]
  data:any;
  accessPeriods= [
    {label: '24 Hours', value: 24, sort: 24},
    {label: '48 Hours', value: 48, sort: 48},
    {label: '72 Hours', value: 72, sort: 72},
    {label: '7 Days', value: 168, sort: 168},
    {label: '3 Months', value: 2160, sort: 2160},
    {label: '6 Months', value: 4320, sort: 4320},
    {label: '1 Year', value: 8760, sort: 8760},
    {label: '2 Years', value: 17520, sort: 17520},
    {label: 'Perpetual', value: -1, sort: 99999}
  ];
  constructor(
    public http: HTTPService,
    public base: BaseService,
    public dialogRef: MatDialogRef<AddComponent>,
    
    @Inject(MAT_DIALOG_DATA) public basedata: any
  ) { }
  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    // console.log(this.basedata.element.name)
    console.log(this.basedata.prices);
    this.selectAllPublishers();
    this.getCurrencyList();
  }

  selectAllPublishers(){
    // let publisher = localStorage.getItem('publisher')  ;
    var name =  window.encodeURIComponent(this.basedata.element.name)
    let URL= this.base.OPEN_URL+name;
    this.http.getDatawithGet(URL,'').subscribe((res:any)=>{
      if(res && res.resource && res.resource[0]){
        this.data= res.resource[0];
      }        
      console.log(res);       
    })
  }
  getCurrencyList(){
    let publisher = localStorage.getItem('publisher')  ;
    // var name =  window.encodeURIComponent(this.basedata.element.name)
    let URL= this.base.CURRENCY_LIST+publisher+ '/currencies';
    this.http.getDatawithGet(URL,'').subscribe((res:any)=>{
      this.currency  =  res;
        console.log(res);       
    })

  }
  addPrice(){
    this.basedata.prices[0]
    var add= {
        description: this.basedata.prices[0].description,
        identifier: this.basedata.prices[0].identifier ,
        name: this.basedata.prices[0].name,
        price_name:this.basedata.prices[0].price_name,
        price_amount:'',
        price_currency:'',
        price_interval:'',                
        productType:this.basedata.prices[0].productType,
    }
    
    this.basedata.prices.push(add);
    console.log('Add price',this.basedata.prices)
  }

  closeDialog(update:any) {
    this.dialogRef.close(update);
  }

  update(){
    let publisher = localStorage.getItem('publisher')  ;
    var name = this.basedata.element.name.replace('/', '!2F')
    let URL= this.base.DELETE_PRICE+ publisher +'/products/'+ name;
    console.log(URL);
  
    var prices= this.checkPricealreayexit();
    var data={
        corpus: null,
        description: this.basedata.element.description,
        identifier: this.basedata.element.identifier,
        name: this.basedata.element.name,
        prices: prices,
        productType: this.basedata.element.productType
  
    }
    console.log(data);
    this.http.getDatawithPut(URL,data).subscribe((res:any)=>{
      // alert(res);
      this.closeDialog(true);
    })
  
  }
  checkPricealreayexit(){
    var prices:any
    prices=[];
    this.basedata.prices.forEach((element:any) => {
      // if(element.price_interval==this.data.element.price_interval 
        // && element.price_currency == this.data.element.price_currency)
        // element.price_amount=  this.data.element.price_amount    
        prices.push({
          name: element.price_name, 
          amount: element.price_amount,
           currency: element.price_currency,
           interval: element.price_interval
        });     
    });
    return prices;
  }
  
  
  removeitem(index:any){
    
    console.log(index,'     ', this.basedata.prices)
    this.basedata.prices.splice(index, 1);
    console.log(index,'     ', this.basedata.prices)
  
  }
  

}
