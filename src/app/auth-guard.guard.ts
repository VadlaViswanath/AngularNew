import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanLoad {
  canLoad(): boolean {
    return confirm("Are you sure navigate another route ?");
  }
  
  
}
