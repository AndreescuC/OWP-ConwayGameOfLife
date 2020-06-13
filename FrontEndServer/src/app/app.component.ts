import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontEndServer';
  size = 40
  rows= Array(this.size).fill(0).map((x,i)=>i)
  columns= Array(this.size).fill(0).map((x,i)=>i)
}

