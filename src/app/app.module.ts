import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { SubscriberRecordComponent } from './subscriber-record/subscriber-record.component';
import { SubscriberInfoComponent } from './subscriber-info/subscriber-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SubscriberComponent,
    SubscriberRecordComponent,
    SubscriberInfoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
