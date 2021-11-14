import {Attribute, Component, OnInit,ElementRef} from '@angular/core';

@Component({
  selector: 'fmmodal',
  templateUrl: './fish-modal-frame.component.html',
  styleUrls: ['./fish-modal-frame.component.css']
})
export class FishModalFrameComponent implements OnInit {
  modalTitle:string;
  constructor(@Attribute('title') public title: string,private elem: ElementRef) { 
    this.modalTitle = title
  }

  ngOnInit(): void {
  }

}
