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
  
          // Check the response to ensure the login is successful (e.g., response.success === true)
          if (response) {
            // Redirect to the home page upon successful login
            this.router.navigate(['/home']) // Replace '/home' with your desired route navigate(['/home']);
          }
        },
        (error) => {
          console.log('error for adding book' + error);
        }
      );
    }
  
    reloadPage(): void {
      window.location.reload();
    }



    // getCurrentBuyer() {
    //   return this.httpclient.get(`${this.baseUrl}/currentBuyer`, { withCredentials: true });
    // }

}
