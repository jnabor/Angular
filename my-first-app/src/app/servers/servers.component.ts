import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = '';

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  constructor() { 
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = 'A new server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(ecent: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
