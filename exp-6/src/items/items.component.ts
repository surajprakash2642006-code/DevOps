import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../app/api.service';

@Component({
  selector: 'app-items',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  posts: any[] = []; 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('2. ItemsComponent: ngOnInit started');
    
    this.apiService.getPosts().subscribe({
      next: (data: any) => {
        console.log('3. SUCCESS! Data received:', data);
        this.posts = data;
      },
      error: (err: any) => {
        console.error('3. ERROR! Failed to fetch posts:', err);
      }
    });
  }
}