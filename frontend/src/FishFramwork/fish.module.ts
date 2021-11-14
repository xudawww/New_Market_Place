import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog'
import { CommonModule } from '@angular/common';
import { FishbtnDirective } from './fishBtn/fishbtn.directive';
import { FishcardComponent } from './fishcard/fishcard.component';
import { FishRoutingModule } from './fish-routing.module';
import { FishcardHeaderDirective } from './fishcard/fishcard-header.directive';
import { FishmenuComponent } from './fishmenu/fishmenu.component';

import { FishOpenerService } from './fishModalOpener/fish-opener.service';
import { FishModalFrameComponent } from './fish-modal-frame/fish-modal-frame.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FishFieldComponent } from './fish-field/fish-field.component';
import { FormsModule } from '@angular/forms';
import { BidiModule } from '@angular/cdk/bidi';

@NgModule({
  declarations: [ FishbtnDirective, FishcardComponent,  FishcardHeaderDirective, FishmenuComponent,  FishModalFrameComponent, FishFieldComponent, ],
  imports: [ 
    BrowserAnimationsModule,
    CommonModule,
    FishRoutingModule,
    MatInputModule,
    OverlayModule,
    BidiModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

  ],
  exports: [
    BrowserAnimationsModule,
    FishbtnDirective, 
    FishcardComponent,
    FishcardHeaderDirective,
    FishRoutingModule,
    FishmenuComponent,
    FishModalFrameComponent,
    FishOpenerService,
    MatIconModule,
    FishFieldComponent,
    MatInputModule,


  ]
})
export class FishModule {}
