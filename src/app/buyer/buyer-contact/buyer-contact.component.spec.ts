import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerContactComponent } from './buyer-contact.component';

describe('BuyerContactComponent', () => {
  let component: BuyerContactComponent;
  let fixture: ComponentFixture<BuyerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
