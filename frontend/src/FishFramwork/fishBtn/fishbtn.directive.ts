import { Directive ,} from '@angular/core';
import {
  Component,
  OnInit,
  Attribute,
  Output,
  Input,
  EventEmitter,
  ViewChild, ElementRef,HostListener
} from '@angular/core';

@Directive({
  selector: '[fbtn]',
  
})
export class FishbtnDirective {
   raise:string;
   flat:string;
   outline:string;
   primary:string;
   secondary:string;
   warn:string; 
   icon:string;
   fab:string;
   minifab:string

  constructor(public el:ElementRef) {
      el.nativeElement.style.textAlign='center';
      el.nativeElement.style.padding='10px 20px';
      el.nativeElement.style.borderRadius='5px';
      el.nativeElement.style.border='none';
      el.nativeElement.style.cursor='pointer';
      el.nativeElement.style.fontSize='15px';
      el.nativeElement.style.filter='brightness(1)';
      el.nativeElement.style.marginRight='10px';
      const disabled = el.nativeElement.getAttribute('disabled');
      const primary = el.nativeElement.getAttribute('primary');
      const secondary = el.nativeElement.getAttribute('secondary');
      const warn = el.nativeElement.getAttribute('warn');
      const raise = el.nativeElement.getAttribute('raise');
      const flat = el.nativeElement.getAttribute('flat');
      const fab = el.nativeElement.getAttribute('fab');
      const minifab = el.nativeElement.getAttribute('minifab');
      const outline = el.nativeElement.getAttribute('outline');
      let backgroundOrColor= raise===''||flat===''||fab===''||minifab===''?'background':'color';
      primary===''?(el.nativeElement.style[backgroundOrColor]='#77a6f7'):null;
      secondary===''?el.nativeElement.style[backgroundOrColor]='#f7931e':null;
      warn===''?el.nativeElement.style[backgroundOrColor]='#f44336':null;

      if(backgroundOrColor==='background'){
        el.nativeElement.style.color= primary===null&&secondary===null&&warn===null?'grey':'white';
      }
      else{
        el.nativeElement.style.background='white';
      }
      if(outline===''){
        el.nativeElement.style.border='1px solid #E8E8E8';
      }
      if(fab===''||minifab===""){
        el.nativeElement.style.padding='0px 0px';
        el.nativeElement.style.width=fab===''?'50px':'40px';
        el.nativeElement.style.height=fab===''?'50px':'40px';
        el.nativeElement.style.borderRadius=el.nativeElement.offsetWidth/2+'px';
        el.nativeElement.style.overflow='hidden';
        el.nativeElement.style.boxShadow='0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)';
        
      }
      if(raise===''){
        el.nativeElement.style.boxShadow='0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)';
        
      }
      if(disabled===''){
        el.nativeElement.style.opacity=0.5;
        el.nativeElement.style.cursor='not-allowed';
      }
   }

}
