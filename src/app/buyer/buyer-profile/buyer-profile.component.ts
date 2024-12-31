import { Component, OnInit } from '@angular/core';
import { BuyerNavbarComponent } from "../buyer-navbar/buyer-navbar.component";
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-buyer-profile',
  imports: [BuyerNavbarComponent,RouterLink,ReactiveFormsModule],
  templateUrl: './buyer-profile.component.html',
  styleUrl: './buyer-profile.component.scss'
})
export class BuyerProfileComponent implements OnInit{
 dbBuyer: any;
    buyerid: any;
    buyer: FormGroup;
  
    posts: any[] = [];
  
    constructor(private http: HttpClient, private router: Router) {
      this.buyer = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        address: new FormControl(''),
      });
    }
  
    ngOnInit(): void {
      const sessionurl = 'http://localhost:8080/login/currentBuyer';
  
      this.http.get(sessionurl).subscribe((response: any) => {

        console.log("From response",response);
      
        if (response) {
          this.dbBuyer = response;
          this.buyerid = this.dbBuyer.buyerid;
          console.log("Buyer id from init method",this.buyerid);
          this.buyer.patchValue({
            firstName: this.dbBuyer.firstName,
            lastName: this.dbBuyer.lastName,
            email: this.dbBuyer.email,
            phone: this.dbBuyer.phone,
            address: this.dbBuyer.address,
            password:this.dbBuyer.password
          });
        }
      });
      
    }

    editBuyer(): void {
      const puturl = `http://localhost:8080/buyer/${this.buyerid}`;
      this.http.put(puturl, this.buyer.value).subscribe(
        (response) => {
          console.log('Value updated successfully', response);
          this.dbBuyer=response;
          this.reloadPage();
        },
        (error) => {
          console.error('Failed to update farmer details', error);
        }
      );
    }

    reloadPage(){

      window.location.reload();
    }

  }


