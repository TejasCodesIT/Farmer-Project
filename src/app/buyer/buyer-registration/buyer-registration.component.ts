import { CommonModule, } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HomeNavbarComponent } from "../../home-navbar/home-navbar.component";

@Component({
  selector: 'app-buyer-registration',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HomeNavbarComponent],
  templateUrl: './buyer-registration.component.html',
  styleUrl: './buyer-registration.component.scss'
})
export class BuyerRegistrationComponent {
constructor(private httpclient:HttpClient,private router: Router){ }

  buyer= new FormGroup({  
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),  // Only letters
        lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),   // Only letters
        email: new FormControl('', [Validators.required, Validators.email]),   // Valid email
        phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),  // 10 digits
        address: new FormControl('', Validators.required),  // Required field
        password: new FormControl('', Validators.required)  // Required field
      });

  handleSubmit(){
    if (this.buyer.invalid) {
      return; // Don't proceed if the form is invalid
    }
    const url = "http://localhost:8080/buyer"

    console.log(this.buyer.value);
     this.httpclient.post(url,this.buyer.value).subscribe((response:any)=>   {
      console.log(response);

      if(response){
        this.router.navigate(['/buyerlogin']);
        alert("Registration Sucessfull...🤗");
        
      }
      else{

        alert("This image or phone number is allready register...!");
      }

      },error=> {
        console.log("error for adding buyer" + error);
      });

    } 
    reloadPage(): void {
      window.location.reload();
    }

  }

