import { Component, OnInit } from '@angular/core';
// import { ApiInitialize, ApiService } from './services/api.service';
import { locationEnv } from 'src/environments/environments';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project_3_Frontend';
  activePage = "Welcome!"
  // private apiInit: ApiInitialize

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      console.log("received data")
      console.log(data)
    })
  }

  onActivate(event: any) {
    console.log(event.pageName)
    this.activePage = event.pageName;
  }
}
