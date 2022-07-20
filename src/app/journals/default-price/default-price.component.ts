import { Component, OnInit } from '@angular/core';
import { hwValidator } from '../../services/hwvalidator.service'
import { HTTPService } from '../../services/http.service';
import { BaseService } from 'src/app/services/base.service';


@Component({
  selector: 'app-default-price',
  templateUrl: './default-price.component.html',
  styleUrls: ['./default-price.component.css']
})
export class DefaultPriceComponent implements OnInit {

  constructor(public http: HTTPService,
    public base: BaseService,
    public hwv: hwValidator,
  ) { }

  ngOnInit(): void {
    this.selectAllPublishers();




  }
  currency = []

  displayedColumns: string[] = ['name', 'description', 'options', 'productType', 'price_interval', 'price_amount'];
  freeLabel = 'Free';
  notForSaleLabel = 'Not for Sale';
  clickedRows = new Set<any>();
  products: any;
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  animal: any;
  name: any;
  priceTypes = {
    article: ['article'],
    issue: ['issue', 'article']
  }

  pricearray: any


  sitedata: any;
  display = false;

  accessPeriods = [
    { label: '24 Hours', value: 24, sort: 24 },
    { label: '48 Hours', value: 48, sort: 48 },
    { label: '72 Hours', value: 72, sort: 72 },
    { label: '7 Days', value: 168, sort: 168 },
    { label: '3 Months', value: 2160, sort: 2160 },
    { label: '6 Months', value: 4320, sort: 4320 },
    { label: '1 Year', value: 8760, sort: 8760 },
    { label: '2 Years', value: 17520, sort: 17520 },
    { label: 'Perpetual', value: -1, sort: 99999 }
  ]





  selectAllPublishers() {
    let publisher = localStorage.getItem('publisher');
    let URL = this.base.SITE_LIST;
    var data = {
      pubTerm: publisher,
      role: "Intelligent Commerce Pricing and Reporting UI",
      userId: "2"
    }
    this.http.getDatawithPost(URL, data).subscribe((data: any) => {
      console.log(data);
      this.sitedata = data.sites;
    })
  }

  // hide and show div function
  toggle() {
    this.display = !this.display;
  }

  addPrice(type: any) {
    this.pricearray[0]
    var add = {
      description: this.pricearray[0].description,
      identifier: this.pricearray[0].identifier,
      name: this.pricearray[0].name,
      price_name: this.pricearray[0].price_name,
      price_amount: '',
      price_currency: '',
      price_interval: '',
      productType: type,
    }

    this.pricearray.push(add);
    console.log('Add price', this.pricearray)
  }

  removeitem(index: any) {
    this.base.openSnackBar(5, 'Item deleted');
    console.log(index, '   ', this.pricearray)
    this.pricearray.splice(index, 1);
    console.log(index, '   ', this.pricearray)

  }

  getCurrencyList() {
    let publisher = localStorage.getItem('publisher');
    // var name =  window.encodeURIComponent(this.basedata.element.name)
    let URL = this.base.CURRENCY_LIST + publisher + '/currencies';
    this.http.getDatawithGet(URL, '').subscribe((res: any) => {
      this.currency = res;
      console.log(res);
    })
  }




}
