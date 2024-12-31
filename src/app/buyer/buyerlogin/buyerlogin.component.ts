import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router, RouterLink } from '@angular/router';
import { HomeNavbarComponent } from "../../home-navbar/home-navbar.component";


@Component({
  selector: 'app-buyerlogin',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HomeNavbarComponent],
  templateUrl: './buyerlogin.component.html',
  styleUrl: './buyerlogin.component.scss'
})
export class BuyerloginComponent {

   baseurl = `http://localhost:8080/login`;

   constructor(private httpclient: HttpClient, private router: Router) {}


     public loginrequestBuyer: FormGroup = new FormGroup({
       username: new FormControl('', [Validators.required, Validators.email]),
       password: new FormControl('', [Validators.required]),
     });


     handlesubmitBuyer() {
      const url = '/buyer';
  
      console.log(this.loginrequestBuyer.value);
      this.httpclient.post(`${this.baseurl}/buyer`, this.loginrequestBuyer.value).subscribe(
        (response: any) => {
          console.log(response);
  
         
          if (response!=null) {
           alert("Login Successfull ...!🤗");
            this.router.navigate(['/buyer-home']) 
          }
          else{
              alert("Please Enter valid credential");
          }
        },
        (error) => {
          console.log('Login Fail May server is down' + error);
        }
      );
    }
  
    reloadPage(): void {
      window.location.reload();
    }
}
