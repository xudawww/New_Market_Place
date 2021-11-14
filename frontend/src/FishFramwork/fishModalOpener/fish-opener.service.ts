import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
interface Size
{
  width:string,
  height:string

}
@Injectable({
  providedIn: 'root'
})

export class FishOpenerService {

  constructor(public dialog: MatDialog) { }
  open(component:any,data:any,size:Size){
    this.dialog.open(component,{
      width:size.width,
      data:{},
      disableClose: true 

    })

  }
  close(){
    
  }
}
