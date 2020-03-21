import { Directive , ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  // @Input() appCustomDirective:string;    when selector and input name is same it works
  @Input() hoverColor:string;
  constructor(private _el:ElementRef) { 
    // this._el.nativeElement.style.color='green';
  }

 @HostListener('mouseenter') onMouseEnter(){
  // this.hiliteColor('green');
  this.hiliteColor(this.hoverColor);
 }

 @HostListener('mouseleave') onMouseLeave(){
  this.hiliteColor('red');
 }



hiliteColor(color){
   this._el.nativeElement.style.color='orange';
  this._el.nativeElement.style.backgroundColor=color;
}


}
