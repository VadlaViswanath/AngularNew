import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-data',
  templateUrl: './radio-data.component.html',
  styleUrls: ['./radio-data.component.css']
})
export class RadioDataComponent implements OnInit {

  constructor() { }

userDetails=[];

changeData(data){
  this.userData.forEach(i=>{
      if(i.name !== data.name){
        i.flag = false;
      }
  });
  this.userDetails=data.details;
}

// changeData(data){
//   for(let i of this.userData){
//     if(i.name !== data.name){
//       i.flag=false;
//     }
//   }
//   this.userDetails=data.details;
// }



  userData=[
    {
      name:"visu",
      flag:false,
      details:[
        {
          gender:"male",
          age:25
        }
      ]
    },
    // {
    //   name:"visu",
    //   flag:false,
    //   details:[
    //     {
    //       gender:"male",
    //       age:25
    //     }
    //   ]
    // },   //second radio button with same details
    {
      name:"guna",
      flag:false,
      details:[
        {
          gender:"male",
          age:16
        }
      ]

    },
    {
      name:"madhu",
      flag:false,
      details:[
        {
          gender:"male",
          age:23
        }
      ]

    }

  ];


  ngOnInit() {
  }

}
