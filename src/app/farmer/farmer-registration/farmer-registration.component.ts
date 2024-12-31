import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HomeNavbarComponent } from "../../home-navbar/home-navbar.component";

@Component({
  selector: 'app-farmer-registration',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HomeNavbarComponent],
  templateUrl: './farmer-registration.component.html',
  styleUrl: './farmer-registration.component.scss'
})
export class FarmerRegistrationComponent {

  constructor(private httpclient: HttpClient, private router: Router) { }

  farmer = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),  // Only letters
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),   // Only letters
    email: new FormControl('', [Validators.required, Validators.email]),   // Valid email
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),  // 10 digits
    address: new FormControl('', Validators.required),  // Required field
    password: new FormControl('', Validators.required)  // Required field
  });

  // Handle form submission
  handleSubmit() {
    if (this.farmer.invalid) {
      return; // Don't proceed if the form is invalid
    }

    const url = "http://localhost:8080/farmer/insert";

    
    this.httpclient.post(url, this.farmer.value).subscribe((response: any) => {
      console.log(response);

      if (response) {
        alert("Registration Sucessfull...🤗");
        this.router.navigate(['/farmerlogin']);

      }
      else{
        alert("Please cheak Email ");
      }

    }, error => {
      console.log("Error for adding farmer: " + error);
    });
  }

  // Reload the page
  reloadPage(): void {
    window.location.reload();
  } 


    // onRegister() {
    //   if (this.farmer.valid) {
    //     const email = this.farmer.value.email;
  
    //     // Send a thank-you email via the backend
    //     this.httpclient.post('http://localhost:8080/email', null, {
    //         params: { localemail: email },
    //       })
    //       .subscribe({
    //         next: (response) => {
    //           alert('Thank you email sent successfully!');
    //         },
    //         error: (error) => {
    //           alert('Thank you email sent successfully!');
    //           console.error('Error:', error);
    //         },
    //       });
    //   } else {
    //     alert('Please enter a valid email address.');
    //   }
    // }
  }

