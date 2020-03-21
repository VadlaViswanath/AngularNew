import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tack-optisol',
  templateUrl: './tack-optisol.component.html',
  styleUrls: ['./tack-optisol.component.css']
})
export class TackOptisolComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  user:any={};
  employees:any=[];
   url2:string="https://www.getpostman.com/collections/f0912c9f44a3fb671a69";
  url:string="http://localhost:3000/users";

  submit(){
    this._http.post(this.url,this.user).subscribe(()=>{
      alert("Data added successfully");
      console.log(this.user);
    });
  }



  ngOnInit() {
    this._http.get(this.url).subscribe((data)=>{
      this.employees=data;
    })
  }

}
