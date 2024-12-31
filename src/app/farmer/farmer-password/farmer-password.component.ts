import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";

import { Router} from '@angular/router';
import { BuyerNavbarComponent } from "../../buyer/buyer-navbar/buyer-navbar.component";

@Component({
  selector: 'app-farmer-password',
  templateUrl: './farmer-password.component.html',
  styleUrls: ['./farmer-password.component.scss'],
  imports: [LoginNavbarComponent, ReactiveFormsModule, BuyerNavbarComponent],
})
export class FarmerPasswordComponent {

  changepassword = new FormGroup({  
    oldPassword: new FormControl(),
    confirmpassword: new FormControl(),
    newPassword: new FormControl()
  });

  constructor(private http: HttpClient, private snackBar: MatSnackBar,private router:Router) {}

  validateSignupForm(): void {
    const formValues = this.changepassword.value;

    if (!formValues.newPassword || !formValues.confirmpassword) {
      this.snackBar.open('Please fill in all fields', 'Close', { duration: 3000 });
      return;
    }

    if (formValues.newPassword !== formValues.confirmpassword) {
      this.snackBar.open('Passwords do not match', 'Close', { duration: 3000 });
      return;
    }

    this.confirmpassword();
  }

  confirmpassword(): void {
    const url = 'http://localhost:8080/login/changepassword';

    

    this.http.post(url,this.changepassword.value).subscribe((response: any) => {
      if (response) {
        this.snackBar.open('Password Updated Successfully', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });

        
        this.router.navigate(['/profile']);


      } else {
        this.snackBar.open('Please Enter a Valid Password', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      }
    });
  }

  reloadPage(){

    window.location.reload();
  }
}
