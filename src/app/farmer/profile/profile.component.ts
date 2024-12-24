import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-profile',
  standalone: true, 
  imports: [RouterLink, LoginNavbarComponent,NgFor],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'] 
})
export class ProfileComponent implements OnInit {


  constructor(private http: HttpClient,private router:Router){}
  ngOnInit(): any {


    this.loadFarmerPost();
    
  }


  posts:any=[];

farmerid=1

  loadFarmerPost(){

const url = `http://localhost:8080/post/farmer/${this.farmerid}`

this.http.get(url).subscribe((response:any)=>{

  this.posts=response;

}) }


deletePost(postid: number) {
  const deleteurl = `http://localhost:8080/post/${postid}`;

  this.http.delete(deleteurl).subscribe((response:any)=>{
 

   if(response){

               this.router.navigate(['/profile'])

   }
        


  })
  

}

reloadPage(){

window.location.reload();

}


}

