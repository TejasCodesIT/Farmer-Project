import { Component } from '@angular/core';
import { HomeNavbarComponent } from "../home-navbar/home-navbar.component";

@Component({
  selector: 'app-welcome',
  imports: [HomeNavbarComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
