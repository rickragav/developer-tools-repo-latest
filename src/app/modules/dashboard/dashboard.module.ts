import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { Base64ImageDecoderComponent } from './pages/base64-image-decoder/base64-image-encoder-decoder.component';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Base64ImageEncoderComponent } from './pages/base64-image-encoder/base64-image-encoder.component';

@NgModule({
  imports: [DashboardRoutingModule,FormsModule,CommonModule,ToastModule],
  declarations:[HomeComponent,Base64ImageDecoderComponent,Base64ImageEncoderComponent],
  providers: [MessageService]
})
export class DashboardModule {}
