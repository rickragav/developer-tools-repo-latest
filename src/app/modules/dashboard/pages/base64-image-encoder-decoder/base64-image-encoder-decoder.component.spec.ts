import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64ImageEncoderDecoderComponent } from './base64-image-encoder-decoder.component';

describe('Base64ImageEncoderDecoderComponent', () => {
  let component: Base64ImageEncoderDecoderComponent;
  let fixture: ComponentFixture<Base64ImageEncoderDecoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base64ImageEncoderDecoderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Base64ImageEncoderDecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
