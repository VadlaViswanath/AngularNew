import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  
  name = '';

name2:string="visu";

click(){
  this.name="newProject1";
}


  ngOnChanges() {
    console.log("hi");
}
  
}
