import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";

@Component({
  selector: 'app-profile',
  standalone: true, 
  imports: [RouterLink, LoginNavbarComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'] 
})
export class ProfileComponent {

}
