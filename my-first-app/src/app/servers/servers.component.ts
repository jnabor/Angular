import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import { Server } from '../shared/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = '';
  serverCreated = false;
  random: number;

  servers: Server[] = [
    new Server('Test Server AAA', 11),
    new Server('Test Server HEX', 22),
    new Server('Test Server TDD', 34)
  ];

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  constructor(public snackBar: MdSnackBar) { 
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
  }

  onChangedEvent(){


      this.snackBar.open("sdsdsdsdsdsdsdsasdasd", null, {
      duration: 3000
      });
  }

  onCreateServer(){
    var rand = Math.floor(Math.random() * 10);
    this.servers.push(new Server(this.serverName, rand));
    this.serverCreationStatus = 'A new server was created! Name is ' + this.serverName;
    this.serverName = '';
    
    /*
    this.serverCreated = true;
    setTimeout(() => {
        this.serverCreated = false;
      }, 4000);
    */    
  }

  ngOnInit() {
  }

}
