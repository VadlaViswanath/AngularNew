import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name:string="";
  range:number;
  // val:number=1000;
  constructor() { }

  ngOnInit() {
  }

}
