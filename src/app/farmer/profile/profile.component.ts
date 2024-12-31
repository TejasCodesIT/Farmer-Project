  import { Component, OnInit } from '@angular/core';
  import { Router, RouterLink } from '@angular/router';
  import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";
  import { HttpClient } from '@angular/common/http';
  import { NgFor, NgIf } from '@angular/common';
  import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

  @Component({
    selector: 'app-profile',
    standalone: true, 
    imports: [RouterLink, LoginNavbarComponent,NgFor,ReactiveFormsModule,NgIf],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'] 
  })
  export class ProfileComponent implements OnInit {
    dbFarmer: any;
    farmerid: any;
    farmer: FormGroup;
  
    posts: any[] = [];
  
    constructor(private http: HttpClient, private router: Router) {
      this.farmer = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        address: new FormControl(''),
      });
    }
  
    ngOnInit(): void {
      const sessionurl = 'http://localhost:8080/login/currentFarmer';
  
      this.http.get(sessionurl).subscribe((response: any) => {
        if (response) {
          this.dbFarmer = response;
          this.farmerid = this.dbFarmer.farmerid;
  
          this.farmer.patchValue({
            firstName: this.dbFarmer.firstName,
            lastName: this.dbFarmer.lastName,
            email: this.dbFarmer.email,
            phone: this.dbFarmer.phone,
            address: this.dbFarmer.address,
            password:this.dbFarmer.password
          });
        }
      });
      
  
      this.loadFarmerPost();
    }
  
    loadFarmerPost(): void {
    
      const url = `http://localhost:8080/post/farmer/${this.farmerid}`;
      this.http.get(url).subscribe((response: any) => {
        this.posts = response;
      });
    }
  
    deletePost(postid: number): void {
      const deleteurl = `http://localhost:8080/post/${postid}`;
      this.http.delete(deleteurl).subscribe(() => {
        this.loadFarmerPost(); // Reload posts after deletion
      });
    }
  
    editFarmer(): void {
      const puturl = `http://localhost:8080/farmer/${this.farmerid}`;
      this.http.put(puturl, this.farmer.value).subscribe(
        (response) => {
          console.log('Value updated successfully', response);
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
  