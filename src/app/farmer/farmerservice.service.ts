import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmerserviceService {

  private currentFarmer: any;

  setCurrentFarmer(farmer: any): void {
    this.currentFarmer = farmer;
    console.log("Set current farmer:", this.currentFarmer);  // Debugging log
  }

  getCurrentFarmer(): any {
    console.log("Get current farmer:", this.currentFarmer);  // Debugging log
    return this.currentFarmer;  // Return the entire object
  }
}
