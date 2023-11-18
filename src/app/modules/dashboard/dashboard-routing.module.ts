import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { HomeComponent } from './pages/home/home.component';
import { Base64ImageEncoderDecoderComponent } from './pages/base64-image-encoder-decoder/base64-image-encoder-decoder.component';

// http://localhost:4200/dashboard/base64-image-encoder-decoder

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component:HomeComponent, pathMatch: 'full' },
      { path: 'base64-image-encoder-decoder', component:Base64ImageEncoderDecoderComponent, pathMatch: 'full' },
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
export class DashboardRoutingModule { }
