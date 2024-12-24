import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuyerNavbarComponent } from "../buyer-navbar/buyer-navbar.component";
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buyer-contact',
  imports: [ BuyerNavbarComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './buyer-contact.component.html',
  styleUrl: './buyer-contact.component.scss'
})
export class BuyerContactComponent {


  constructor(private httpclient: HttpClient) {}
  
    contactUs = new FormGroup({
      name: new FormControl('', []), // You can add validation rules here
      email: new FormControl('', []),
      message: new FormControl('', []),
    });
  
    responseMessage = '';
  
    buyerid=1;
  
    onSubmit() {
  
      const postData ={
        ...this.contactUs.value,
        buyer:{
             buyerid:this.buyerid
        }
  
   }
  
      if (this.contactUs.valid) {
        const { name } = this.contactUs.value;
        this.responseMessage = `Thank you, ${name}, for contacting us!`;
       
  
        const url = 'http://localhost:8080/contact/buyer';
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
