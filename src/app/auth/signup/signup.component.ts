

import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router, ActivatedRoute } from '@angular/router';

import { Observable ,  BehaviorSubject ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Angulartics2 } from 'angulartics2';

import { AuthresolverService } from '../authresolver.service';
import { BrowserModule } from '@angular/platform-browser';
import { BaseService } from '../../services/base.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;


 

  authError: boolean = false
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private angulartics2: Angulartics2,
    private authz: AuthresolverService,
    private base :BaseService
  ) { 

    this.registerForm = this.formBuilder.group({
      user: ['', Validators.required],      
      persistLogin: ['',],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  ngOnInit() {
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    
    this.authError = false;
    this.authz.login(
      this.registerForm.value.user,
      this.registerForm.value.password,
      this.registerForm.value.persistLogin,      
 
 
    )
    .subscribe((result:any) => {
        let pubTerms = [];
        let publishers = '';
        if (!result) {
          this.authError = true;
          return;
        }

        // this.angulartics2.eventTrack.next({
        //   action: 'login:user',
        //   properties: {
        //     category: 'authorization',
        //     label: 'user-login',
        //     value: 1,
        //   }
        // })
        // this.authz.publishers.forEach((elem:any) => {
        //   this.angulartics2.eventTrack.next({
        //     action: 'access:publisher',
        //     properties: {
        //       category: 'authorization',
        //       label: elem.term,
        //       value: 1
        //     }
        //   });
        // });
        this.base.openSnackBar(5,'Login successfully.');
        this.router.navigateByUrl('journals/publishers');
      }
      // ,
      // error => {
      //   console.log(`error: ${error}`);
      //   this.authError = true;
      // }
    );
  }

  
 
  
}
