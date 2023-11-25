import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { Base64ImageDecoderComponent } from './pages/base64-image-decoder/base64-image-encoder-decoder.component';
import { CommonModule } from '@angular/common';
import { Base64ImageEncoderComponent } from './pages/base64-image-encoder/base64-image-encoder.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  imports: [DashboardRoutingModule, FormsModule, CommonModule, ClipboardModule],
  declarations: [HomeComponent, Base64ImageDecoderComponent, Base64ImageEncoderComponent],
  providers: [],
})
export class DashboardModule {}
