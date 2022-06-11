import { Component, OnInit } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent implements OnInit {
  areaOfint: Array<any> = [
    { name: 'Playing', value: 'Playing' },
    { name: 'Drawing', value: 'Drawing' },
    { name: 'Dancing', value: 'Dancing' }
  ];

  public myForm: FormGroup;
  public isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    let email = '[A-za-z0-9._%+-]+@[A-za-z0-9.-]+.[A_za-z]{2,3}$';
    this.myForm = formBuilder.group({
      mob: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      // fname: ['',  [Validators.required, Validators.pattern("/^[A-Za-z](?!.*?\s$)[A-Za-z\s]{0,20}$/")]],
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{0,20}$')]],
      lname: ['', [Validators.required, Validators.pattern('[A-Za-z]{0,20}$')]],
      email: ['', [Validators.required, Validators.pattern(email)]],
      gender: ['', Validators.required],
           checkArray: this.formBuilder.array([])
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.myForm.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      //   checkArray.controls.forEach((item: FormControl) => {
      //     if (item.value == e.target.value) {
      //       checkArray.removeAt(i);
      //       return;
      //     }
      //     i++;
      //   });
      // }
    }
  }

  ngOnInit() {}

  get m() {
    return this.myForm.controls;
  }

  onSubmit() {
    console.log(this.myForm.value);
    console.log(
      'First name : ' +
        this.m.fname.value +
        '\nLast name : ' +
        this.m.lname.value +
        ' \nEmail : ' +
        this.m.email.value +
        ' \nMobile : ' +
        this.m.mob.value +
        ' \nArea of interest : ' +
        this.m.checkArray.value +
        ' \nGender : ' +
        this.m.gender.value
    );

    alert(
      'First name : ' +
        this.m.fname.value +
        '\n Last name : ' +
        this.m.lname.value +
        ' \n Email : ' +
        this.m.email.value +
        ' \n Mobile : ' +
        this.m.mob.value +
        '\n  Area of interest : ' +
        this.m.checkArray.value +
        '\n  Gender : ' +
        this.m.gender.value
    );
  }
}
