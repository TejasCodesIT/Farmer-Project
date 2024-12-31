import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BuyerNavbarComponent } from "../buyer-navbar/buyer-navbar.component";

@Component({
  selector: 'app-buyer-password',
  templateUrl: './buyer-password.component.html',
  styleUrls: ['./buyer-password.component.scss'],
  imports: [ BuyerNavbarComponent]
})
export class BuyerPasswordComponent {
  password: string = '';
  confirmPassword: string = '';
  isSubmitButtonDisabled: boolean = true;

  //logoUrl: string = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dshopping%2BLogo%2BDesign&psig=AOvVaw3VLdOx6R8k7t7eVF9ZUPQ-&ust=1734887555373000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICQ04GuuYoDFQAAAAAdAAAAABAE';

  validatePassword(): void {
    if (this.password !== this.confirmPassword) {
      console.log("Passwords don't match.");
      this.isSubmitButtonDisabled = true;
    } else {
      console.log('Passwords match.');
      this.isSubmitButtonDisabled = false;
    }
  }

  validateSignupForm(): void {
    if (!this.password || !this.confirmPassword) {
      console.log('There are some required fields!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      console.log("Passwords don't match.");
      return;
    }

    this.onSignup();
  }

  onSignup(): void {
    console.log('Simulating AJAX call...');
    this.isSubmitButtonDisabled = true;

    setTimeout(() => {
      console.log('AJAX call completed.');
      this.isSubmitButtonDisabled = false;
    }, 1000);
  }
}
