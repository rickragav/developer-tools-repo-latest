import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { Base64ImageDecoderComponent } from './pages/base64-image-decoder/base64-image-encoder-decoder.component';
import { CommonModule } from '@angular/common';
import { Base64ImageEncoderComponent } from './pages/base64-image-encoder/base64-image-encoder.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ApiService } from 'src/app/core/api/api.service';
import { Base64DecoderComponent } from './pages/base64-decoder/base64-decoder.component';
import { UtilsService } from 'src/app/core/services/UtilsService';

@NgModule({
  imports: [DashboardRoutingModule, FormsModule, CommonModule, ClipboardModule],
  declarations: [HomeComponent, Base64ImageDecoderComponent, Base64ImageEncoderComponent,Base64DecoderComponent],
  providers: [ApiService,UtilsService],
})
export class DashboardModule {}
