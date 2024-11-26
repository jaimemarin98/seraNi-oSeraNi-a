import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showCountdown = false;
  showVideo = false;
  countdownNumbers = [5, 4, 3, 2, 1];
  currentCountdownIndex = -1;

  startCountdown() {
    this.showCountdown = true;
    let index = 0;
    const interval = setInterval(() => {
      this.currentCountdownIndex = index;
      index++;
      if (index === this.countdownNumbers.length) {
        clearInterval(interval);
        setTimeout(() => {
          this.showCountdown = false;
          this.showVideo = true;
        }, 1000);
      }
    }, 1000);
  }
}
