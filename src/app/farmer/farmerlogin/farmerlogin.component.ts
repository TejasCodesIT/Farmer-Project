import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";
import { HomeNavbarComponent } from "../../home-navbar/home-navbar.component";

@Component({
  selector: 'app-farmerlogin',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, LoginNavbarComponent, HomeNavbarComponent],
  templateUrl: './farmerlogin.component.html',
  styleUrls: ['./farmerlogin.component.scss'],
})
export class FarmerloginComponent {
  baseurl = `http://localhost:8080/login`;
  currentFarmer: any;

  constructor(private httpclient: HttpClient, private router: Router) {}

  public loginRequestFarmer: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public handleSubmitFarmer(): void {


    
    console.log(this.loginRequestFarmer.value);
    this.httpclient.post(`${this.baseurl}/farmer`, this.loginRequestFarmer.value).subscribe(
      (response: any) => {


        console.log('Login successful:', response);

      console.log(response)

        if(response!=null){
          this.router.navigate(['/home']);
        }




      },
      (error) => {
        console.error('Error during login:', error);
        alert('Login failed. Please try again.');
      }
    );
  }


  // setCurrentFarmer(farmer: any): void {
  //   this.currentFarmer = farmer;
  // }

  getCurrentFarmer(): any {
    return this.currentFarmer;
  }
}
