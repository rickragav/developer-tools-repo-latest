import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nft-header',
    templateUrl: './nft-header.component.html',
    
})
export class NftHeaderComponent implements OnInit {

  navbarOpen = false;

  constructor(private router:Router) {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  onLogoClicked(){
    this.router.navigate(['/dashboard']);
  }
}
