import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

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

  onCreateServer(){
    this.serverCreationStatus = 'A new server was created! Name is ' + this.serverName;
    this.serverName = '';
    /*
    this.serverCreated = true;
    setTimeout(() => {
        this.serverCreated = false;
      }, 4000);
    */

    this.snackBar.open(this.serverCreationStatus, null, {
      duration: 3000
      });
  }

  ngOnInit() {
  }

}
