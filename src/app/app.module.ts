import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import{ FirstComponent} from './first/first.component'
import { CustomDirectiveDirective } from './custom-directive.directive';
 import { AuthGuardGuard } from './auth-guard.guard';
import { TackOptisolComponent } from './tack-optisol/tack-optisol.component';
import { AddInputsComponent } from './add-inputs/add-inputs.component';
import { RangePipe } from './range.pipe';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { RadioDataComponent } from './radio-data/radio-data.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
    FirstComponent,
    TackOptisolComponent,
    AddInputsComponent,
    RangePipe,
    CheckboxFilterComponent,
    RadioDataComponent,
    TodoListComponent,
    LocalStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
