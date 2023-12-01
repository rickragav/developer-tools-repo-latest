import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from 'src/app/core/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [RouterOutlet],
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    
  }
}
