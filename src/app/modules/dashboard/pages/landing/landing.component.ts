import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/core/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  developerTools: any;

  constructor(private apiService: ApiService, private router: Router) {}
  ngOnInit(): void {
    // this.apiService.getToolsList().subscribe(
    //   (data) => {
    //     this.developerTools = data;
    //     console.log('Api ToolLists success ' + data);
    //   },
    //   (err) => {
    //     console.log('Api Failed ' + err);
    //   },
    // );

    this.developerTools = [
      {
        name: 'Base64 Text Encoder',
        description: 'Easily convert text to Base64 with various advanced options.',
        text: 'iVBORw0KGgoAAAANSUhEUgAAC0AAAAcICAYAAACv5EAVAAAMPWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWn/\n                   AlBBaAOndRkgChBJjIKjYkUUF14KKBWzoqohip9kRO4ti74sFFWVdLNiVNymg677yvfm+mfnvP2f+c+bcuWUA/\n                   UD/OFYtzUQ0A8kQFktiQAEZySiqD9BSQARWowtacy8sXs6KjIwAsg/3fy7vrAJH1VxxkWv8c/69Fky/I5wGAR/\n                   Oczs/n5UF8AAC8mieWFABAlPHmUwrEMgwr0JbAACFeIMOZClwtw+kKvEduEx/LhrgNABUqlyvJBEDtEuQZhbx/\n                   MqKHWB7GTiC8UAaDOgNg3L28SH+I0iG2gjRhimT4z/QedzL9ppg9pcrmZQ1ixFnlRCRTmi37PdPzvkpcrHfRh/\n                   BSs1SxIaK1szzNvNnEnhMkyFuFeUHhkFsRbEH4R8uT3EKCVLGpqgsEcNeflsmDOgC7ETnxsYDrEhxMGi3MgIJ/',
        route: '/dashboard/base64-encoder',
      },
      {
        name: 'Base64 Text Decoder',
        description: 'Easily convert Base64 text to String with various advanced options.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        route: '/dashboard/base64-decoder',
      },
    ];
  }

  onToolItem(route: any) {
    console.log('route' + route);
    this.router.navigate([route]);
  }
}
