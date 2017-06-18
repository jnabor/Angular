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

  displayDetails(){
    this.x = Date.now();
    this.timestamps.push(this.x);
    if(this.isShown == true){
      this.isShown = false;
    } else {
      this.isShown = true;
    }
  }

  getColor(i){
    if(i >= 4){
      return 'blue';
    } else {
      return 'white';
    }
  }

  isEnabled(i){
    if(i >= 4){
      return true;
    } else {
      return false;
    }
  }

}
