import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeNavbarComponent } from "../home-navbar/home-navbar.component";


@Component({
  selector: 'app-register',
  imports: [RouterLink, HomeNavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
