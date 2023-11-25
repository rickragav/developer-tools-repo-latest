import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64EncoderComponent } from './base64-encoder.component';

describe('Base64EncoderComponent', () => {
  let component: Base64EncoderComponent;
  let fixture: ComponentFixture<Base64EncoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base64EncoderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Base64EncoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
