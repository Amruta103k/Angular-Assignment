import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public myForm: FormGroup;


  constructor(private formBuilder: FormBuilder
  ) {
    this.myForm = formBuilder.group({
      mob: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      fname: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$[a-zA-Z][a-zA-Z ]+")]],
      lname:['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email:['', [Validators.required, Validators.pattern ("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$]")]],
      // city:[],
      // gender:[]
    })
  }
    
  get m(){
    return this.myForm.controls;
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

}