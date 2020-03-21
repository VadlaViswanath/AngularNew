import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-inputs',
  templateUrl: './add-inputs.component.html',
  styleUrls: ['./add-inputs.component.css']
})
export class AddInputsComponent implements OnInit {

  myform: FormGroup;
  msg: any = "";

  constructor() {
    this.myform = new FormGroup({
      firstname: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]*$")]),
      skills: new FormArray([])
    });
  }

  addSkill(){
    (<FormArray>this.myform.get('skills')).push(new FormControl(''));
  }

  deleteSkill(index){
    (<FormArray>this.myform.get('skills')).removeAt(index);
  }

  submit() {
    if (this.myform.valid) {
      this.msg = "FirstName: " + this.myform.controls.firstname.value
    } else {
      this.msg = "Invalid"
    }
  }
  ngOnInit() {
  }

}
