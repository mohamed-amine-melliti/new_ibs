import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smartup',
  templateUrl: './smartup.component.html',
  styleUrls: ['./smartup.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SmartupComponent implements OnInit {
  currentDate: string;

  constructor() {
    // Format date as shown in the image (DD/MM/YYYY HH:MM:SS)
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    this.currentDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  ngOnInit(): void {
  }
}