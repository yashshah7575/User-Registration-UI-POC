import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  public phoneNumbers: FormArray;
  public phoneNumberForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.phoneNumberForm = this.fb.group({
      phoneNumbers: this.fb.array([ this.createPhoneNumber() ])
    });
  }

  ngOnInit(): any {

  }

  get phoneNumberControls(): any {
    return this.phoneNumberForm.get('phoneNumbers')['controls'];
  }

  createPhoneNumber(): FormGroup {
    return this.fb.group({
      phoneValue: '',
      isPrimary: ''
    });
  }

  addPhoneNumber(): void {
    this.phoneNumbers = this.phoneNumberForm.get('phoneNumbers') as FormArray;
    this.phoneNumbers.push(this.createPhoneNumber());
  }

  removePhoneNumber(i: number): any {
    this.phoneNumbers.removeAt(i);
  }

  logValue(): any {
    console.log(this.phoneNumbers.value);
  }

}
