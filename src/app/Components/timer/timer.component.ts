
import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {

  time: number =0;
  interval: any;
  isRunning : boolean = false;

  startTimer(): void{
    if(!this.isRunning){
      this.interval = setInterval(() =>{
        this.time++;
      },1000);
      this.isRunning =true;
    }  
  }
  pauseTimer(): void{
    clearInterval(this.interval);
    this.isRunning = false;

  }
  resetTimer(): void{
    this.pauseTimer();
    this.time=0;
  }

  get formattedTime(): string {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

}

