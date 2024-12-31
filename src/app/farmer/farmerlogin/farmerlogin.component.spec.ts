import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerloginComponent } from './farmerlogin.component';

describe('FarmerloginComponent', () => {
  let component: FarmerloginComponent;
  let fixture: ComponentFixture<FarmerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
