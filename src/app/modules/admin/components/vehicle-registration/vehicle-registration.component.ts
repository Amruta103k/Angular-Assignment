import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent implements OnInit {
  public formVehicleRegistration:FormGroup;
  Brands :any=['Lamborghini','BMW','Ferrari','Mercedes','Toyota']
  constructor(private formBuilder:FormBuilder) {
    this.formVehicleRegistration=formBuilder.group(
      {
        VOname:['', [Validators.required, Validators.pattern('[a-zA-Z]{0,20}$')]],
        VRNo:['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{5,10}$')]],
        brand:['',[Validators.required]]
      });
   }


  ngOnInit(): void {
  }

  get m() {
    return this.formVehicleRegistration.controls;
  }

  onSubmit(){
    console.log(this.m.VOname.value+'  rno '+this.m.VRNo.value+'  brand '+this.m.brand.value);
  }
}
