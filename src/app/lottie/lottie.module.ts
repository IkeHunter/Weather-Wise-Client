import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lottie',
  template: '<lottie-player src="/assets/SunAnimation.json" background="transparent"  speed="0.5"  style="width: 300px; height: 300px;" loop autoplay></lottie-player>'
})

export class LottieComponent {}

@Component({
  selector: 'app-lottie-sun',
  template: '<lottie-player id="sunanimation" mode="normal" src="/assets/SunAnimation.json" background="transparent" speed="0.5" style="width: 100%; height: 100%" loop autoplay></lottie-player>'
})
export class LottieSunComponent {}

@Component({
  selector: 'app-lottie-compass',
  template: '<lottie-player id="compassanimation" src="/assets/CompassAnimation.json" background="transparent"  speed="0.5" style="width: 100%; height: 100%" loop autoplay></lottie-player>'
})
export class LottieCompassComponent {}

@NgModule({
  declarations: [LottieComponent, LottieSunComponent, LottieCompassComponent],
  exports: [LottieComponent, LottieSunComponent, LottieCompassComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule
  ],
})
export class LottieModule { }
