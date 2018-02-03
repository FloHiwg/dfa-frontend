import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from './_helper/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = this.titleService.getTitle();

  constructor(private router: Router, private titleService: TitleService) {

  }

  ngOnInit() {
  }
}
