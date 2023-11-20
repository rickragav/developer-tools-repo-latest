import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64ImageEncoderComponent } from './base64-image-encoder.component';

describe('Base64ImageEncoderComponent', () => {
  let component: Base64ImageEncoderComponent;
  let fixture: ComponentFixture<Base64ImageEncoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base64ImageEncoderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Base64ImageEncoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
