import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent {
  @Input() pageName: String;

  currentTime: any = new Date().toLocaleTimeString();

  currentImg: string = "/assets/blue-sky.jpg";
  morningImg: string = "/assets/morning-sky.jpg";
  afternoonImg: string = "/assets/blue-sky.jpg";
  duskImg: string = "/assets/dusk-sky.jpg";
  nightImg: string = "/assets/night-sky-3.jpg";

  secondsCounter = interval(1000);
  subscription = this.secondsCounter.subscribe((n: any) => {
    this.currentTime = new Date().toLocaleTimeString();
  });

  constructor() {
    var currentHour = new Date().getHours();
    if(currentHour > 5 && currentHour <= 10) {  // morning
      this.currentImg = this.morningImg;
      // this.currentImg = this.nightImg;
      console.log("morning");
    } else if(currentHour > 10 && currentHour <= 17) {  // afternoon
      this.currentImg = this.afternoonImg;
      console.log("afternoon");

    } else if(currentHour > 17 && currentHour <= 20) {  // dusk
      this.currentImg = this.duskImg;
      console.log("dusk");
    } else if (currentHour > 20 || currentHour <= 5) { // night
      this.currentImg = this.nightImg;
      console.log("night");
    } else { // fallback
      this.currentImg = this.afternoonImg;
      // this.currentImg = this.morningImg;
      // this.currentImg = this.duskImg;
      // this.currentImg = this.nightImg;
      console.log("fallback: " + currentHour);
    }
  }


}
