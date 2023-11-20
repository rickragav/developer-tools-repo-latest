import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64ImageDecoderComponent } from './base64-image-encoder-decoder.component';

describe('Base64ImageEncoderDecoderComponent', () => {
  let component: Base64ImageDecoderComponent;
  let fixture: ComponentFixture<Base64ImageDecoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base64ImageDecoderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Base64ImageDecoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
