import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardGuard } from './auth-guard.guard';
import { MyModule } from './my/my.module';
import { FirstComponent } from './first/first.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { CanActivateGuard } from './can-activate.guard';


export const routes: Routes = [
  {path:"component1",component:FirstComponent},
  {path:"component2",loadChildren:'./my/my.module#MyModule',canLoad:[AuthGuardGuard]},
  {path:"component3",component:CheckboxFilterComponent,canActivate:[CanActivateGuard]}
  // {path:"component2",loadChildren:'./my/my.module#MyModule'}
];

// export const lazyRoutes:ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
