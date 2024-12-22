import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPasswordComponent } from './farmer-password.component';

describe('FarmerPasswordComponent', () => {
  let component: FarmerPasswordComponent;
  let fixture: ComponentFixture<FarmerPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
