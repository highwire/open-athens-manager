import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subscriber } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { SubscriberInfoComponent } from './subscriber-info/subscriber-info.component';
import { SubscriberRecordComponent } from './subscriber-record/subscriber-record.component';
import { SubscriberComponent } from './subscriber/subscriber.component';

const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'login', component: SignupComponent },
  { path: 'login',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
   { path: 'subscriber', component: SubscriberComponent }, 
   { path: 'subscriber-record', component:SubscriberRecordComponent},
   { path: 'subscriber-info', component:SubscriberInfoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
