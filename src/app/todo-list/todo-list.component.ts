import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  user=new user2();
  ArrayData=[];
  data:string="";
  add(){
    // this.user=new user2();
    this.user.list=this.data;
    this.ArrayData.push(this.user);
    this.data="";
  }
  ngOnInit() {}

  strike2(data){
    // this.ArrayData[i].txt=!this.ArrayData[i].txt;
   
    this.ArrayData.forEach(i=> {
        if(i.list==data){
           i.txt=!i.txt; 
        } 
      });
  }


  // strike2(i){
  //   this.ArrayData[i].list.strike();
  // }



  // strikeLine2:boolean=false;
  // strike2(){
  //   this.strikeLine2=!this.strikeLine2;
  // }
}


class user2{
    list:string;
    txt:boolean=false;
    
}