import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private httpclient: HttpClient, private router: Router) {}


  public loginrequestFarmer: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });


  public handlesubmitFarmer() {
    {
      const url = 'http://localhost:8080/login/farmer';

      console.log(this.loginrequestFarmer.value);
      this.httpclient.post(url, this.loginrequestFarmer.value).subscribe(
        (response: any) => {
          console.log(response);


          if (response) {
           
            this.router.navigate(['/home']); 
          }
        },
        (error) => {
          console.log('error for adding book' + error);
        }
      );
    }
  }



  public loginrequestBuyer: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  handlesubmitBuyer() {
    const url = 'http://localhost:8080/login/buyer';

    console.log(this.loginrequestBuyer.value);
    this.httpclient.post(url, this.loginrequestBuyer.value).subscribe(
      (response: any) => {
        console.log(response);

        // Check the response to ensure the login is successful (e.g., response.success === true)
        if (response) {
          // Redirect to the home page upon successful login
          this.router.navigate(['/home']); // Replace '/home' with your desired route
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
}
