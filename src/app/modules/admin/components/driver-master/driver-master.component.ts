import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-driver-master',
  templateUrl: './driver-master.component.html',
  styleUrls: ['./driver-master.component.css'],
})
export class DriverMasterComponent implements OnInit {

  public driverMaster: FormGroup;
  formData : any =[];
  constructor(private formBuilder: FormBuilder) {
    this.driverMaster = formBuilder.group({
      dname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{0,20}$')]],
      lno: ['', [Validators.required, Validators.pattern('[0-9]{0,20}$')]],
      mob: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      lImg: ['', Validators.required],
      date:['']
    });
  }

  get m() {
    return this.driverMaster.controls;
  }

  onSubmit() {
    this.formData.push(this.driverMaster.value);

    console.log(
      'First name : ' +
        this.m.dname.value +
        ' \nEmail : ' +
        this.m.lno.value +
        ' \nMobile : ' +
        this.m.mob.value
    );

  }

  ngOnInit() {

  }

  deleteRow(event:any,index:number)
  {
    if(confirm('Are you sure you want to delete?'))
    {
      this.formData.splice(index, 1);
      this.formData();
    }
  }

  editRow (event :any, index: number) {
      if (index != -1) {
      alert('you selected ' +  this.formData[index].dname +'  lno '+this.formData[index].lno +' val '+ this.formData[index].date);
    }
};



}
