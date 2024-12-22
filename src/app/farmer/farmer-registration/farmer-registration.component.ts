import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HomeNavbarComponent } from "../../home-navbar/home-navbar.component";


@Component({
  selector: 'app-farmer-registration',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, HomeNavbarComponent],
  templateUrl: './farmer-registration.component.html',
  styleUrl: './farmer-registration.component.scss'
})
export class FarmerRegistrationComponent {


  constructor(private httpclient:HttpClient,private router:Router){ }

  farmer= new FormGroup({  
    firstName: new FormControl(),
     lastName:new FormControl(),
     email:new FormControl(),
     phone : new FormControl(),
      address : new FormControl(),
      password:new FormControl()

    

  });

  handleSubmit(){
    const url = "http://localhost:8080/farmer/insert"

    console.log(this.farmer.value);
     this.httpclient.post(url,this.farmer.value).subscribe((response:any)=>   {
      console.log(response);

      if(response){
     this.router.navigate(['/farmerlogin'])

      }

    }, error=> {
      console.log("error for adding book" + error);
    })

  }

  reloadPage(): void {
    window.location.reload(); 
  }
}
