import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginNavbarComponent } from "../../farmer/login-navbar/login-navbar.component";
import { BuyerNavbarComponent } from "../buyer-navbar/buyer-navbar.component";
import { HomeComponent } from '../../farmer/home/home.component';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buyer-home',
  imports: [ BuyerNavbarComponent,NgFor,NgIf],
  templateUrl: './buyer-home.component.html',
  styleUrl: './buyer-home.component.scss'
})
export class BuyerHomeComponent implements OnInit{

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
