import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing_Directive } from '../app/fish-router-setup.service';

@NgModule({
  imports: [Routing_Directive[0]],
  exports: [RouterModule]
})
export class FishRoutingModule { 

}
