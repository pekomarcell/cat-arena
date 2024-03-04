import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"],
})
export class TimerComponent {
  @Output() openOnCountdown = new EventEmitter<void>();

  seconds: number = 0;
  textSec: string = "0";

  ngOnInit(): void {
    this.countdown();
  }

  countdown() {
    this.seconds = 20;
    const timer = setInterval(() => {
      this.seconds = this.seconds - 1;

      if (this.seconds === 0) {
        clearInterval(timer);
        this.openOnCountdown.emit();
      }
    }, 1000);
  }
}
