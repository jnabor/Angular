import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics3',
  templateUrl: './basics3.component.html',
  styleUrls: ['./basics3.component.css']
})
export class Basics3Component implements OnInit {
  timestamps = [];
  isShown = true;
  x = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay(){
    this.isShown = !this.isShown;
    this.x = Date.now();
    this.timestamps.push(this.x);
  }
}
