import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    let email = "[A-za-z0-9._%+-]+@[A-za-z0-9.-]+\.[A_za-z]{2,3}$"
    this.myForm = formBuilder.group({
      mob: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      // fname: ['',  [Validators.required, Validators.pattern("/^[A-Za-z](?!.*?\s$)[A-Za-z\s]{0,20}$/")]],
      fname: ['',  [Validators.required, Validators.pattern("[a-zA-Z]{0,20}$")]],
      lname: ['',  [Validators.required, Validators.pattern("[A-Za-z]{0,20}$")]],
      email:  ['', [Validators.required, Validators.pattern(email)]],
    })
  }
  ngOnInit() {

  }


  get m() {
    return this.myForm.controls;
  }

  onSubmit() {
    console.log("First name : "+this.m.fname.value+"\nLast name : "+this.m.lname.value+" \nEmail : "+ this.m.email.value+" \nMobile : "+ this.m.mob.value );

    alert("First name : "+this.m.fname.value+"\n Last name : "+this.m.lname.value+" \n Email : "+ this.m.email.value+" \n Mobile : "+ this.m.mob.value );
  }
}
