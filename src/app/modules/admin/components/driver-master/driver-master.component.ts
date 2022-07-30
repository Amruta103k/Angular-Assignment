import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import driverDataJson from 'src/assets/Data/driverInfo.json';
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
  public isEdit: boolean = false;
  public editRowNumber: number = 0;
  public driverMaster: FormGroup;
  formData: any = [];
  constructor(private formBuilder: FormBuilder) {
    this.driverMaster = formBuilder.group({
      dname: ['', [Validators.required, Validators.pattern('[a-zA-Z]{0,20}$')]],
      lno: ['', [Validators.required, Validators.pattern('[0-9]{0,20}$')]],
      mob: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      lImg: [
        '',
        [Validators.required, Validators.pattern('(.*?).(jpg|png|jpeg)$')],
      ],
      date: [''],
    });
  }

  get m() {
    return this.driverMaster.controls;
  }

  onSubmit() {
    if (this.isEdit == false) {
      this.formData.push(this.driverMaster.value);
    } else {
      this.formData[this.editRowNumber].dname = this.m.dname.value;
      this.formData[this.editRowNumber].date = this.m.date.value;
      this.formData[this.editRowNumber].mob = this.m.mob.value;
      this.formData[this.editRowNumber].lImg = this.m.lImg.value;

      this.formData[this.editRowNumber].lno = this.m.lno.value;
      this.isEdit = false;
    }
    this.driverMaster.reset();
  }
  onCancle() {
    this.driverMaster.reset();
  }

  ngOnInit() {
    formData: driverDataJson;
  }

  deleteRow(event: any, index: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.formData.splice(index, 1);
      this.formData();
    }
  }

  editRow(event: any, index: number) {
    if (index != -1) {
      this.isEdit = true;
      this.editRowNumber = index;
      this.m.dname.setValue(this.formData[index].dname);
      this.m.lno.setValue(this.formData[index].lno);
      this.m.date.setValue(this.formData[index].date);
      this.m.mob.setValue(this.formData[index].mob);
      this.m.lImg.setValue(this.formData[index].lImg);

      alert('Update record');
    }
  }
}
