import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { HomeComponent } from './pages/home/home.component';
import { Base64ImageDecoderComponent } from './pages/base64-image-decoder/base64-image-encoder-decoder.component';
import { Base64ImageEncoderComponent } from './pages/base64-image-encoder/base64-image-encoder.component';
import { LandingComponent } from './pages/landing/landing.component';
import { Base64EncoderComponent } from './pages/base64-encoder/base64-encoder.component';
import { Base64DecoderComponent } from './pages/base64-decoder/base64-decoder.component';

// http://localhost:4200/dashboard/base64-image-encoder-decoder

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: LandingComponent, pathMatch: 'full' },
      { path: 'base64-image-decoder', component: Base64ImageDecoderComponent, pathMatch: 'full' },
      { path: 'base64-image-encoder', component: Base64ImageEncoderComponent, pathMatch: 'full' },
      { path: 'base64-encoder', component: Base64EncoderComponent, pathMatch: 'full' },
      { path: 'base64-decoder', component: Base64DecoderComponent, pathMatch: 'full' },
      { path: 'nfts', component: NftComponent },
      { path: 'podcast', component: PodcastComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
