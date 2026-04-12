import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    console.log('1. ApiService: Attempting to fetch from API...');
    return this.http.get<any[]>(this.apiUrl);
  }
}