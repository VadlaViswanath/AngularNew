import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondComponent } from './second/second.component';
import { RouterModule, Routes } from '@angular/router';


export const appRoutes:Routes=[
  {path:"",component:SecondComponent}
]

@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule,RouterModule.forChild(appRoutes)
  ],
  // bootstrap:[SecondComponent]
})
export class MyModule { }
