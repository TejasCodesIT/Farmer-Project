import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeNavbarComponent } from "../../home-navbar/home-navbar.component";
import { MatSnackBar   } from '@angular/material/snack-bar';

@Component({
  selector: 'app-farmerlogin',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HomeNavbarComponent],
  templateUrl: './farmerlogin.component.html',
  styleUrls: ['./farmerlogin.component.scss'],
})
export class FarmerloginComponent {
  baseurl = `http://localhost:8080/login`;
  currentFarmer: any;

  constructor(private httpclient: HttpClient, private router: Router,private snackBar: MatSnackBar) {}

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
          alert("Login Successfull... 🤗");
        }
        else{
          alert("Please Enter Valid Credential 🚨");
        }
      },
      (error) => {
        console.error('Error during  Farmer login:', error);
        alert('Login failed. Please try again.');
      }
    );
  }
}
