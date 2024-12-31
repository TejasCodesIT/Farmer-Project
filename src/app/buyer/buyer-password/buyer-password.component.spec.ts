import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerPasswordComponent } from './buyer-password.component';

describe('BuyerPasswordComponent', () => {
  let component: BuyerPasswordComponent;
  let fixture: ComponentFixture<BuyerPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
