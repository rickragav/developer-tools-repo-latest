import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-base64-image-encoder',
  templateUrl: './base64-image-encoder.component.html',
  styleUrl: './base64-image-encoder.component.scss',
})
export class Base64ImageEncoderComponent {
  public files: any[] = [];
  baseString: any;

  defaultBase64Image =
    'data:image/png;base64,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';

  base64ImageUrl!: any;

  displayBase64Image = false;

  constructor(private messageService: MessageService) {}

  errorLoadingBase64Image(event: any) {
    event.target.src = this.defaultBase64Image;
  }

  checkImage(str: any) {
    var _img = document.createElement('img');

    _img.onload = function () {
      const linkSource = str;
      const downloadLink = document.createElement('a');
      downloadLink.href = linkSource;
      downloadLink.download = 'base64image.png';
      downloadLink.click();
      alert('Download Successfull');
    };
    _img.onerror = function () {
      alert('Invalid Image Data');
    };
    setTimeout(() => {
      _img.src = str;
    }, 10);
  }

  errorMessage() {
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  downloadFile(data: any): void {
    this.checkImage(data);
  }

  onclickSwitchTodecoder() {
    window.location.href = 'dashboard/base64-image-decoder';
  }

  async onFileChange(pFileList: any) {
    this.files = pFileList.target.files;
    if (this.files && this.files.length) {
      try {
        this.base64ImageUrl = await this.convertFileToBase64(this.files[0]);
        // console.log(this.base64ImageUrl);
        //do something with above data string
      } catch (e) {
        //handle error
        this.base64ImageUrl = this.defaultBase64Image;
      }
    }
  }

  convertFileToBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }
}
