  import { CommonModule } from '@angular/common';
  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
  import { HomeNavbarComponent } from "../../home-navbar/home-navbar.component";
  import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";

  @Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, LoginNavbarComponent], // Removed unnecessary imports
  })
  export class ContactComponent implements OnInit {

    dbFarmer:any;
    farmerid:any;

    constructor(private httpclient: HttpClient) {}


    ngOnInit(): void {

      const url="http://localhost:8080/login/currentFarmer"
      
      this.httpclient.get(url).subscribe((response:any)=>{

        this.dbFarmer= response;
        this.farmerid=this.dbFarmer.farmerid;

      })


    }

    contactUs = new FormGroup({
      name: new FormControl('', []), // You can add validation rules here
      email: new FormControl('', []),
      message: new FormControl('', []),
    });

    responseMessage = '';



    onSubmit() {

      const postData ={
        ...this.contactUs.value,
        farmer:{
            farmerid:this.farmerid
        }

  }

      if (this.contactUs.valid) {
        const { name } = this.contactUs.value;
        this.responseMessage = `Thank you, ${name}, for contacting us!`;    

        const url = 'http://localhost:8080/contact/farmer';
        console.log(this.contactUs.value);

        this.httpclient.post(url, postData).subscribe(
          (response: any) => {
            console.log(response.value);
          },
          (error) => {
            console.log('Error while submitting the form: ' + error);
            
          }
        );
        this.contactUs.reset();
      }
    }
  }
