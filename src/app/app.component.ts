import { Component, OnInit } from '@angular/core';
import { ApiInitialize, ApiService } from './services/api.service';
import { locationEnv } from 'src/environments/environments';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Project_3_Frontend';
  // private apiInit: ApiInitialize

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      console.log("received data")
      console.log(data)
    })
  }

  ngOnInit() {}
  // ngOnInit() {
  //   this.apiInit.initialize().subscribe((data: any) => {
  //     console.log(data)
  //     // let code = data['postal_code']
  //     locationEnv.postal_code = +data['postal_code']
  //   })
  // }
}
