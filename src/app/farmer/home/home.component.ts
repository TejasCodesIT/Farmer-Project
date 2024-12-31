import { Component, OnInit } from '@angular/core';
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ LoginNavbarComponent,NgFor,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{


constructor(private http:HttpClient){}


  ngOnInit(): any{
       this.loadPage(); 
  }

posts:any=[];



public loadPage():any{
const url="http://localhost:8080/post"


this.http.get(url).subscribe((response:any)=>{
   this.posts=response;
return response;

})

}
relodePage(){
  window.location.reload();
}

}
