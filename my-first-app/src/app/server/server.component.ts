import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  //@Ouput() serverCreated = new EventEmitter<{sName: string, sStatus: string}>();
  @Input() server: Server; 
  
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

    //this.serverCreated.emit({
    //  sName: this.server.name,
    //  sStatus: this.serverStatus
    //})
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
