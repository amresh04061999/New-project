import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth-Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Project';
  login:any
  constructor(private authservices:AuthService) { }

  ngOnInit(): void {
    this.authservices.subject.subscribe(res=>{
      this.login=res
    })
  }
  
}
