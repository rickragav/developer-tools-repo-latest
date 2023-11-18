import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { Base64ImageEncoderDecoderComponent } from './pages/base64-image-encoder-decoder/base64-image-encoder-decoder.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [DashboardRoutingModule,FormsModule,CommonModule],
  declarations:[HomeComponent,Base64ImageEncoderDecoderComponent]
})
export class DashboardModule {}
