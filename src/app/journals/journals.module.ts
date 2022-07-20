import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalsRoutingModule } from './journals-routing.module';
import { DefaultPricesComponent } from './default-prices/default-prices.component';
import { SpecificPricesComponent } from './specific-prices/specific-prices.component';
import { SettingsComponent } from './settings/settings.component';
import { PromocodeComponent } from './promocode/promocode.component';
import { IncrementDiscountComponent } from './increment-discount/increment-discount.component';

 // <--- JavaScript import from Angular
 import {MatPaginatorModule} from '@angular/material/paginator';

import {PublihserListComponent} from './publihser-list/publihser-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { EditComponent } from './template/edit/edit.component';
import { AddComponent } from './template/add/add.component';
import { CitationComponent } from './template/citation/citation.component';
import { DeleteComponent } from './template/delete/delete.component';
import { AddNewPriceComponent } from './template/add-new-price/add-new-price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DefaultPriceComponent } from './default-price/default-price.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    DefaultPricesComponent,
    SpecificPricesComponent,
    SettingsComponent,
    PromocodeComponent,
    IncrementDiscountComponent,
    PublihserListComponent,
    EditComponent,
    AddComponent,
    CitationComponent,
    DeleteComponent,
    AddNewPriceComponent,
    DefaultPriceComponent
  ],
  imports: [
    
    CommonModule,
    MatTableModule,
    JournalsRoutingModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    
    FormsModule,
    
    ReactiveFormsModule,
  ]
})
export class JournalsModule { }
