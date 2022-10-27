import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  iconchnage:string
  login:any
  constructor(private route:Router,private authservices:AuthService) { 
    this.iconchnage='bi bi-person-circle ba-2'
  }

  ngOnInit(): void {
    this.authservices.subject.subscribe(res=>{
      this.login=res
    })
    
  }
public logout(){
  localStorage.clear();
this.route.navigate(['/login'])
}

}
