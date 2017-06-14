import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  allowReset = false;
  userName = '';

  onReset(){
    this.userName = '';
    this.allowReset = false;
  }

  onUpdateUserName(){
    if(this.userName != ''){
      this.allowReset = true;
    } 
    else{
      this.allowReset = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
