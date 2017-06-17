import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  classOnline = true;
  classOffline = false;

  constructor() { }

  ngOnInit() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    if(this.serverStatus == 'online'){
      this.classOnline = true;
      this.classOffline = false;
    } else {
      this.classOnline = false;
      this.classOffline = true;
    }
  }
 
  toggleClass() {
    if(this.serverStatus == 'online') {
      this.serverStatus = 'offline';
      this.classOnline = false;
      this.classOffline = true;
    }else {
      this.serverStatus = 'online'
      this.classOnline = true;
      this.classOffline = false;
    }
  }

  onUpdateServerStatus(){
    this.toggleClass();
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'black' : '#acacac';
  }

 
}
