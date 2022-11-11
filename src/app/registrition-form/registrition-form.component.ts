import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrition-form',
  templateUrl: './registrition-form.component.html',
  styleUrls: ['./registrition-form.component.scss']
})
export class RegistritionFormComponent implements OnInit {
  public icon: string;
  public type: string;
  public userform: FormGroup;
  public userType: any
  public userSelect: any
  public isSubmited = false
  constructor(private fb: FormBuilder) {
    this.icon = 'eye-slash';
    this.type = 'password';
    this.userform = this.fb.group({
      Phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(10), Validators.minLength(10)]],
      UserTypeId: ['', [Validators.required]]
    })
    this.userSelect = 3
  }

  ngOnInit(): void {
    this.userType = [
      { id: 1, name: 'Studio Owne' },
      { id: 2, name: 'Artist' },
      { id: 3, name: 'General user' }
    ]

  }
  public userSelectOption(data: any) {
    // if (this.userType.id == 1) {
    //   this.userSelect = 'this is Studio'
    // }
    console.log(data)
  }


  /**
       * password hide and show feature
       */
  onEyeClick() {
    if (this.icon === 'eye-slash') {
      this.icon = 'eye';
      this.type = 'text';
    } else {
      this.icon = 'eye-slash';
      this.type = 'password';
    }
  };


  submit() {
    this.isSubmited = true
    console.log(this.userform);


  }
  // geter function
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.userform.controls;
  }
}
