import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 

  httpClient = inject(HttpClient);
  title = 'take-me-out-client';
  users: any;

  ngOnInit(): void {
    this.httpClient.get('https://localhost:5005/api/users').subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('request has been completed');
      }
    });
  }
  
}
