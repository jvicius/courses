import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      cpassword: new FormControl('', [Validators.required,Validators.minLength(6)])
    }, {validators: this.checkPass.bind(this)
    });
  }

  checkPass(): ValidationErrors | null  {
    if (!this.form) { return; }
    let {password, cpassword} = this.form.getRawValue();
    if(password === cpassword){
     return null;
    }
    return {match : true}
  }

  signup(){

  }

}
