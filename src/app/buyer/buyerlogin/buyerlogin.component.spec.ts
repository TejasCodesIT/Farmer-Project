import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerloginComponent } from './buyerlogin.component';

describe('BuyerloginComponent', () => {
  let component: BuyerloginComponent;
  let fixture: ComponentFixture<BuyerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
