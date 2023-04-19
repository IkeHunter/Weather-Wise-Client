import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project_3_Frontend';

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getPackage().subscribe((data: any) => {
      console.log(data);
    })
  }
}
