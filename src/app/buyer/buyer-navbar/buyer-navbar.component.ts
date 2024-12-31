import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buyer-navbar',
  imports: [RouterLink],
  templateUrl: './buyer-navbar.component.html',
  styleUrl: './buyer-navbar.component.scss'
})
export class BuyerNavbarComponent {


  onLogout(){


    alert("Log Out Successful...🏃🚪") ; 

  }

}
