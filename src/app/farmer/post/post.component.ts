import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  imports: [ReactiveFormsModule, LoginNavbarComponent,NgIf]
})
export class PostComponent {
  dbFarmer: any;
  farmerid: any;
  imagePreview: any;
  productImage: { file: File; url: any }[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  // Define the form with validators
  postproduct = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$')])
  });

  handleSubmit() {
    const sessionUrl = 'http://localhost:8080/login/currentFarmer';

    this.http.get(sessionUrl).subscribe((response: any) => {
      if (response) {
        this.dbFarmer = response;
        this.farmerid = this.dbFarmer.farmerid;

        const formData = new FormData();
        formData.append(
          'post',
          new Blob(
            [
              JSON.stringify({
                ...this.postproduct.value,
                farmer: { farmerid: this.farmerid }
              })
            ],
            { type: 'application/json' }
          )
        );

        
        this.productImage.forEach((imageHandle, index) => {
          formData.append(`imageFile`, imageHandle.file);
        });

        const url = 'http://localhost:8080/post';
        this.http.post(url, formData).subscribe((postResponse: any) => {
          if (postResponse) {
            this.router.navigate(['/profile']);
          }
          else{
            alert("Oop's Somthing Bad Happen Try Again ...😬");
          }
        });
      }
    });
  }

  reloadPage() {
    window.location.reload();
  }

  // Image selection handler
  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const fileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      };

      this.productImage = [...this.productImage, fileHandle];
      this.imagePreview = fileHandle.url; // Preview the first image
    }
  }
}
