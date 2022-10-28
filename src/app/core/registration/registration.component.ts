import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public userForm:FormGroup
  public icon: string;
  public type: string;
  constructor(private fb:FormBuilder,
    private _httpServics:HttpService,
    private route:Router
  ) { 
    this.icon = 'eye-slash';
    this.type = 'password';

    this.userForm=this.fb.group({
      firstname:[''],
      email:[''],
      phoneno:[''],
      usertype:[''],
      lastname:[''],
      password:[''],
      state:[''],
      city:[''],
      profile_image:[''],
      agree:[''],
    })
  }

  ngOnInit(): void {
    this.getuser();
  
  }

  public getuser(){
    this._httpServics.getUser().subscribe({
      next:(value)=>{
        console.log(value);
      }
    })
  
  }
  /**
   * 
   */

  public register() {
    if(this.userForm.valid){
      this._httpServics.adduser(this.userForm.value).subscribe({
        next:(value)=>{
          console.log(value)
        }
      })
    }
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
}
