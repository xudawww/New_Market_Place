import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'fishcard',
  templateUrl: './fishcard.component.html',
  styleUrls: ['./fishcard.component.css'],

})
export class FishcardComponent implements OnInit{

  constructor(private elem: ElementRef) {
    console.log(this.elem.nativeElement.innerHTML )
   }

  ngOnInit(): void {
    console.log(this.elem.nativeElement.querySelector('fc-header > img'))
    if(this.elem.nativeElement.querySelector('fc-header'))
      { this.elem.nativeElement.querySelector('fc-header').style.display='block';
        if(this.elem.nativeElement.querySelector('fc-header > img'))
          {this.elem.nativeElement.querySelector('fc-header > img').style.width ='100%';
           this.elem.nativeElement.querySelector('fc-header > img').style.borderTopRightRadius ='5px';
           this.elem.nativeElement.querySelector('fc-header > img').style.borderTopLeftRadius ='5px';
          }
        if(this.elem.nativeElement.querySelector('fc-header > p'))
          {
            this.elem.nativeElement.querySelector('fc-header > img').style.width ='100%';
            
          }
        var allHeaderChildren =this.elem.nativeElement.querySelector("fc-header").children;
  
        for(const ele of allHeaderChildren){
            console.log(ele.tagName)
            if(ele.tagName!='IMG')
              {
                ele.style.margin = '0.8rem'
              }
         
        }
      
      }
      this.elem.nativeElement.querySelector('fc-header').innerHTML += '<hr class="solid">';
      this.elem.nativeElement.querySelector('fc-header > .solid').style.width='95%';
      this.elem.nativeElement.querySelector('fc-header > .solid').style.margin='95%';
    if(this.elem.nativeElement.querySelector('fc-body'))
      {
        this.elem.nativeElement.querySelector('fc-body').style.display='block';
        this.elem.nativeElement.querySelector('fc-body').style.padding='0.8rem';
        this.elem.nativeElement.querySelector('fc-body > *').style.margin = '0px'
       
      }
    
  }
  public ngAfterContentInit(): void {
  
    console.log(this.elem.nativeElement.querySelector('fc-header > img'))
    if(this.elem.nativeElement.querySelector('fc-header'))
      {
        if(this.elem.nativeElement.querySelector('fc-header > img'))
          this.elem.nativeElement.querySelector('fc-header > img').style.width ='100%';
        if(this.elem.nativeElement.querySelector('fc-header > p'))
          this.elem.nativeElement.querySelector('fc-header > img').style.width ='100%';
        this.elem.nativeElement.querySelector('fc-header').innerHTML += '<hr class="solid">';
      }
    if(this.elem.nativeElement.querySelector('fc-body'))
      {
        
      }
  }

}
