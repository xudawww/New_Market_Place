import { Directive } from '@angular/core';

@Directive({
  selector: 'fc-header'
})
export class FishcardHeaderDirective {

  constructor() { 
    console.log('123')
  }

}
