import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public fruits: Array<string> = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.fruits = ['🍉', '🍇', '🥝', '🍊'];
    }, 3000);
  }
}
