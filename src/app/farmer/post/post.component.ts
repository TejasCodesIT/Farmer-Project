import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FarmerserviceService } from '../farmerservice.service';
import { response } from 'express';

@Component({
  selector: 'app-post',
  imports: [RouterLink, LoginNavbarComponent,FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  dbFarmer: any;
  farmerid :any;

  constructor(private http:HttpClient,private router:Router,
    private farmerService: FarmerserviceService
  ){  }
  ngOnInit(): void {

    const sessionurl = 'http://localhost:8080/login/currentFarmer';

    this.http.get(sessionurl).subscribe((response: any) => {
      console.log("response : " + response);
  
      if (response) {
        this.dbFarmer = response;
        this.farmerid = this.dbFarmer.farmerid;
  
        console.log(this.farmerid, " from farmer id ");
      
      
      }})

    
    
  }

  postproduct=new FormGroup({
    name:new FormControl(),
    description:new FormControl(),
    price : new FormControl()
   

  })

handleSubmit() {
  console.log(this.farmerid,"Form handle submit");

      const postData = {
        ...this.postproduct.value,
        farmer: {
          farmerid: this.farmerid
        }
      };

      const url = "http://localhost:8080/post";
      console.log(this.farmerid, "from postdata");

      this.http.post(url, postData).subscribe((postResponse: any) => {
        console.log(postResponse);

        if (postResponse) {
          this.router.navigate(['/profile']);
        }
      })}
  
  

reloadPage(){
  window.location.reload();
}

}
