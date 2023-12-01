import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private toastr:ToastrService) {}
  base64Decode(base64String: string): string {
    try {
      if (base64String.includes('&')) {
        const decodedParts = base64String.split('&').map((part) => part.split('$').map(atob).join(''));
        return decodedParts.join('');
      } else {
        return atob(base64String);
      }
    } catch (error: any) {
        this.toastr.error(error.message);
      return '';
    }
  }
}
