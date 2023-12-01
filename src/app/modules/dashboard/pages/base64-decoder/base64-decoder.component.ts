import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/UtilsService';

@Component({
  selector: 'app-base64-decoder',

  templateUrl: './base64-decoder.component.html',
  styleUrl: './base64-decoder.component.scss',
})
export class Base64DecoderComponent {
  base64text!: any;
  base64DecodedText!: any;

  constructor(private router: Router, private utilsService: UtilsService) {}

  onclickSwitchToEncoder() {
    this.router.navigate(['/dashboard/base64-encoder']);
  }

  decodeBase64() {
    if (this.base64text) {
      this.base64DecodedText = this.utilsService.base64Decode(this.base64text);
    }
  }
}
