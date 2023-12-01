import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { LayoutRoutingModule } from './layout-routing.module';
import { NftHeaderComponent } from '../dashboard/components/nft/nft-header/nft-header.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [LayoutRoutingModule, HttpClientModule,AngularSvgIconModule.forRoot(),FormsModule,CommonModule],
  declarations:[NftHeaderComponent,LayoutComponent,FooterComponent,BottomNavbarComponent],
  exports:[NftHeaderComponent]
  
})
export class LayoutModule {}
