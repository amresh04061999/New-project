import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { User } from '../registration/model/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm:FormGroup;
  public icon: string;
  public type: string;
  public user: string
  constructor(private fb:FormBuilder,private HttpServices:HttpService,
    private route:Router) {
    this.user=''
    this.icon = 'eye-slash';
    this.type = 'password';
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    
    })
   }

  ngOnInit(): void {

  }
public login(){ 
    this.HttpServices.getUser().subscribe(res=>{
      let user =res.find((user:User)=>((user.email === this.loginForm.controls['email'].value) &&(user.password === this.loginForm.controls['password'].value)))
      if(user){
        alert('succesfull login');
        localStorage.setItem('isAuthentication', 'true');
     this.route.navigate(['/dashbord'])
      }
      else{

        alert('failed login')
      }
      });
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
