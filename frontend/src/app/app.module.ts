import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FishModule } from '../FishFramwork/fish.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';
import { FishRoutingModule } from '../FishFramwork/fish-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginSignupModalComponent } from './login-signup-modal/login-signup-modal.component';
import { LoginModalComponentComponent } from './login-modal-component/login-modal-component.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { UserReducer } from '../rxjs/reducer/user.reducer';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { Routing_Directive } from '../app/fish-router-setup.service';
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
import { BidiModule } from '@angular/cdk/bidi';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { Usereffects } from '../rxjs/effect/user.effect'
// import { ProfileComponent } from './app/profile/profile.component';
@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule, FishModule,MatDialogModule,MatInputModule,HttpClientModule,
    EffectsModule.forRoot([Usereffects]),
    StoreModule.forRoot({ users: UserReducer }),
    HttpClientXsrfModule,   
    AuthModule.forRoot({
      domain: 'library123.auth0.com',
      clientId: 'IMGqmrKqpxLeWj8WYyjj8lhxsh4DecPw'
    }),

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
  exports:[],
  declarations: [AppComponent, HelloComponent, ProductsComponent, HomeComponent, LoginSignupModalComponent, LoginModalComponentComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class AppModule {}
