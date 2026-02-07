import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {
  mediaItems: any[] = [];

  ngOnInit() {
    // Load user's media items
    this.mediaItems = [
      { id: 1, type: 'image', src: 'assets/tadiwa/t1.jpeg', title: 'Us' },
      { id: 2, type: 'image', src: 'assets/tadiwa/t2.jpeg', title: 'Together' },
      { id: 3, type: 'video', src: 'assets/tadiwa/princess.mp4', title: 'Our Moment' },
      { id: 4, type: 'video', src: 'assets/tadiwa/us1.mp4', title: 'Us 1' },
      { id: 5, type: 'video', src: 'assets/tadiwa/us2.mp4', title: 'Us 2' },
    ];
  }
}
