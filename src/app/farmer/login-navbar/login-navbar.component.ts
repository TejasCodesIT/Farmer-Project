import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login-navbar',
  imports: [],
  templateUrl: './login-navbar.component.html',
  styleUrl: './login-navbar.component.scss'
})
export class LoginNavbarComponent {


  logout(){

      alert("Log Out Successful...🏃🚪") ; 

  }


}
