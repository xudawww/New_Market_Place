import { Component, OnInit,Attribute } from '@angular/core';

@Component({
  selector: 'finput',
  templateUrl: './fish-field.component.html',
  styleUrls: ['./fish-field.component.css']
})
export class FishFieldComponent implements OnInit {
  inputType:string;
  inputTitle:string;
  constructor(@Attribute('type') public type: string,@Attribute('title') public title: string) {
    this.inputType = type;
    this.inputTitle = title;
   }

  ngOnInit(): void {
  }

}
