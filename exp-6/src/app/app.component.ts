// src/app/app.component.ts
import { Component } from '@angular/core';
import { ItemsComponent } from '../items/items.component'; // Step 6: Import the component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemsComponent], // Add it here
  template: `<app-items></app-items>`, // Step 5: Add the component tag to the template
})
export class AppComponent {
  title = 'angular-api-app';
}