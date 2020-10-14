import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-email-component',
  templateUrl: './email-component.component.html',
  styleUrls: ['./email-component.component.scss']
})
export class EmailComponentComponent implements OnInit {
  public emails: FormArray;
  public emailForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      emails: this.fb.array([ this.createEmail() ])
    });
  }

  ngOnInit(): any {

  }

  get emailControls(): any {
    return this.emailForm.get('emails')['controls'];
  }

  createEmail(): FormGroup {
    return this.fb.group({
      emailValue: '',
      isPrimary: ''
    });
  }

  addEmail(): void {
    this.emails = this.emailForm.get('emails') as FormArray;
    this.emails.push(this.createEmail());
  }

  removeEmail(i: number): any {
    this.emails.removeAt(i);
  }

  logValue(): any {
    console.log(this.emails.value);
  }

}
