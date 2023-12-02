import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/UtilsService';

@Component({
  selector: 'app-base64-encoder',
 
  templateUrl: './base64-encoder.component.html',
  styleUrl: './base64-encoder.component.scss'
})
export class Base64EncoderComponent {

  text!: any;
  base64EncodedText!: any;

  constructor(private router: Router, private utilsService: UtilsService) {}

  onclickSwitchToDecoder() {
    this.router.navigate(['/dashboard/base64-decoder']);
  }

  encodeBase64() {
   
      this.base64EncodedText = this.utilsService.base64Encode(this.text);
    
  }

}
