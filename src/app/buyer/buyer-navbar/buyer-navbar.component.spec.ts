import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerNavbarComponent } from './buyer-navbar.component';

describe('BuyerNavbarComponent', () => {
  let component: BuyerNavbarComponent;
  let fixture: ComponentFixture<BuyerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
