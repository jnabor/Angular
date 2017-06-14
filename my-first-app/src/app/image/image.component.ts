import { Component, OnInit } from '@angular/core';
import{ Http } from '@angular/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

   myData: Array<any>;

  constructor(private http:Http){
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }

  ngOnInit() {
  }

}
