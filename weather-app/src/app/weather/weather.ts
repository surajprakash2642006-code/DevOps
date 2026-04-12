import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.css']
})
export class WeatherComponent implements OnInit {
  city = 'London';
  latitude = 51.5074;
  longitude = -0.1278;
  weatherData: any;
  loading: boolean = true;
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true`;
    this.http.get(url).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
        console.log('Weather data:', this.weatherData);
      },
      error: (err) => {
        this.error = 'Failed to load weather data';
        this.loading = false;
        console.error(err);
      }
    });
  }
}