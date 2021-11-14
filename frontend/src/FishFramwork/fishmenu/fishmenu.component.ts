import { Component, OnInit,ElementRef,ViewChild,ViewEncapsulation,AfterViewInit} from '@angular/core';
import { Routing_Directive} from '../../app/fish-router-setup.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HostListener } from "@angular/core"
@Component({
  selector: 'fishmenu',
  templateUrl: './fishmenu.component.html',
  styleUrls: ['./fishmenu.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FishmenuComponent {
  @ViewChild('menu') menu: any;
  @ViewChild('bugerMenu') bugerMenu: any;
  menuItems:any;
  color:string='black';
  backgroundcolor:string='white';
  initColor:string='black';
  scrHeight:any;
  scrWidth:any;
  ifBurger:boolean=false;
  ifBurgerButton:boolean=false;
  initBackgroundcolor:string='white';
  ifLoaded:any = false;

  constructor( private elem: ElementRef,private sanitizer: DomSanitizer) {
    this.menuItems = Routing_Directive[1];
    
  }
  @HostListener('window:load', ['$event'])
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    console.log( window.innerWidth)
    this.ifBurger =  window.innerWidth<700?true:false;
    this.ifBurgerButton =  window.innerWidth>700?true:false;
    if(  window.innerWidth>700)
      {
        if( this.elem.nativeElement.getElementsByTagName('li'))
         { for(const ele of this.elem.nativeElement.getElementsByTagName('li'))
            {  
               ele.style.display='inline-block';
               ele.style.margin='5px';
            }
          }
      }
      else{
        this.elem.nativeElement.querySelector('fmnbtns').style.top = '0px';
      }
  }
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--color: ${this.initColor};--background:${this.initBackgroundcolor}`
    );
  }
  //Toggle the buguer menu button
  toggleBuguerMenu(event){
    this.ifBurger = !this.ifBurger;
    if(!this.ifBurger && window.innerWidth<700 ){
      if( this.elem.nativeElement.getElementsByTagName('li'))
      { for(const ele of this.elem.nativeElement.getElementsByTagName('li'))
         {  

            ele.style.display='block';
            ele.style.margin='auto';
            this.elem.nativeElement.querySelector('fmnbtns').style.top = '-60px';
            this.elem.nativeElement.querySelector('fmnbtns').style.right = '-10px';
         }
       }
      
      

    }
   else{
        this.elem.nativeElement.querySelector('fmnbtns').style.top = '0px';
       }

  }
  ngAfterContentInit():void{
    this.getScreenSize();
  }
  ngAfterViewInit():void{
    console.log(this.elem.nativeElement.querySelector('fc-header > img'))
    const primary = this.elem.nativeElement.getAttribute('primary');
    const secondary = this.elem.nativeElement.getAttribute('secondary');
    const warn = this.elem.nativeElement.getAttribute('warn');
    if(primary==''){
     this.color= 'white';
     this.backgroundcolor= '#77a6f7';
    }
    if(secondary==''){
      this.color= 'white';
      this.backgroundcolor= '#f7931e';
    }
    if(warn==''){
      this.color= 'white';
      this.backgroundcolor= '#f7931e';
    }
    this.initColor = this.color
    this.initBackgroundcolor = this.backgroundcolor
    
    let menu = this.menu.nativeElement;
     const list= menu.querySelectorAll('.menuItem');
     const fmnbtns= menu.querySelectorAll('fmnbtns > button');
     for(const btnEle of fmnbtns){
      btnEle.addEventListener('click', function(){
        for(const menuEle of list)
        {
          menuEle.style.background='white';
          menuEle.style.color='black' ; 
        }
        for(const btnEle2 of fmnbtns)
        {
          btnEle2.style.background='white';
          btnEle2.style.color=background ; 
        }
        this.style.background= background;
        this.style.color=color;
        
      })

     }
     list[0].style.background= this.backgroundcolor;
     list[0].style.color= this.color;
     const color = this.color;
     const background = this.backgroundcolor;
     for(const ele of list)
    {
      ele.addEventListener('click', function(){
      for(const btnEle2 of fmnbtns)
        {
          btnEle2.style.background='white';
          btnEle2.style.color=background ; 
        }
      for(const menuEle of list)
       {
         menuEle.style.background='white';
         menuEle.style.color='black' ; 
        }
        console.log(this.backgroundcolor)
        this.style.background= background;
        this.style.color=color;
       });
     }
     
     this.elem.nativeElement.querySelector('fmnbtns').style.position = 'absolute';
     this.elem.nativeElement.querySelector('fmnbtns').style.top = '0px';
     this.elem.nativeElement.querySelector('fmnbtns').style.right = '-10px';
     this.elem.nativeElement.querySelector('fmnbtns').style.display = 'inline-block';
     for(const btnEle of this.elem.nativeElement.querySelectorAll('button')){
        btnEle.style.padding = '10px';
     }
     this.ifLoaded = true
    }
 
 
}
