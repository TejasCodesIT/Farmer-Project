import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginNavbarComponent } from "../../farmer/login-navbar/login-navbar.component";
import { BuyerNavbarComponent } from "../buyer-navbar/buyer-navbar.component";
import { HomeComponent } from '../../farmer/home/home.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-buyer-home',
  imports: [ BuyerNavbarComponent,HomeComponent,NgFor],
  templateUrl: './buyer-home.component.html',
  styleUrl: './buyer-home.component.scss'
})
export class BuyerHomeComponent implements AfterViewInit ,OnInit{

  @ViewChild(HomeComponent) homeComponent : HomeComponent | undefined; 

 
  posts :any=[];

  ngOnInit(): void {
    
  }


  ngAfterViewInit(): void {
    // Make sure the HomeComponent is initialized before accessing it
    if (this.homeComponent) {
      this.posts = this.homeComponent.loadPage(); // Call the loadPage() method
    }
  }


  

}
