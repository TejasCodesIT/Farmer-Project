import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from './register/register.component';
import { FarmerRegistrationComponent } from './farmer/farmer-registration/farmer-registration.component';
import { BuyerRegistrationComponent } from './buyer/buyer-registration/buyer-registration.component';
import { HomeComponent } from './farmer/home/home.component';
import { PostComponent } from './farmer/post/post.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './farmer/profile/profile.component';
import { ContactComponent } from './farmer/contact/contact.component';
import { FarmerloginComponent } from './farmer/farmerlogin/farmerlogin.component';
import { BuyerloginComponent } from './buyer/buyerlogin/buyerlogin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { LoginNavbarComponent } from './farmer/login-navbar/login-navbar.component';
import { BuyerHomeComponent } from './buyer/buyer-home/buyer-home.component';
import { BuyerProfileComponent } from './buyer/buyer-profile/buyer-profile.component';
import { BuyerContactComponent } from './buyer/buyer-contact/buyer-contact.component';
import { BuyerPasswordComponent } from './buyer/buyer-password/buyer-password.component';
import { FarmerPasswordComponent } from './farmer/farmer-password/farmer-password.component';

export const routes: Routes = [
  // {
  //     path:'',redirectTo:'register' , pathMatch:'full'
  // },
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'farmer',
    component: FarmerRegistrationComponent,
  },
  {
    path: 'buyer',
    component: BuyerRegistrationComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'farmer-password',
    component: FarmerPasswordComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'farmerlogin',
    component: FarmerloginComponent,
  },
  {
    path: 'buyerlogin',
    component: BuyerloginComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'home-navbar',
    component: HomeNavbarComponent,
  },
  {
    path: 'login-navbar',
    component: LoginNavbarComponent,
  },
  {
    path: 'buyer-home',
    component: BuyerHomeComponent,
  },
  {
    path: 'buyer-profile',
    component: BuyerProfileComponent,
  },
  {
    path: 'buyer-contact',
    component: BuyerContactComponent,
  },
  {
    path: 'buyer-password',
    component: BuyerPasswordComponent,
  },
];
