import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-proposal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './proposal.html',
  styleUrl: './proposal.css',
})
export class Proposal implements OnInit {
  fullText: string =
    'To my dearest Tadiwa, from the moment you entered my life, everything changed. You aren\'t just my girlfriend; you are my peace, my greatest supporter, and the person who makes every lecture and every rugby match worth coming home to. I built this for you because a simple text wouldn\'t suffice for the woman who holds my heart. You deserve the world. You are, and will always be, JD\'s Princess. Will you be my Valentine?';

  displayText: string = '';
  index: number = 0;
  showButtons: boolean = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.typeWriter();
    });
  }

  typeWriter() {
    if (this.index < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.index);
      this.index++;
      this.ngZone.run(() => {
        this.cdr.markForCheck();
      });
      setTimeout(() => this.typeWriter(), 40);
    } else {
      this.ngZone.run(() => {
        this.showButtons = true;
        this.cdr.markForCheck();
      });
    }
  }

  onYes() {
    alert('I love you! ❤️\n\nYou are and will always be JD\'s Princess!');
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 1000);
  }

  moveButton(event: any) {
    const button = event.target;
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
  }
}
