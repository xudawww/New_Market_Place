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
// import { ProfileComponent } from './app/profile/profile.component';
@NgModule({
  imports: [BrowserModule, FormsModule, FishModule,MatDialogModule,MatInputModule,HttpClientModule,
    StoreModule.forRoot({ users: UserReducer }),
    HttpClientXsrfModule,   
    AuthModule.forRoot({
      domain: 'library123.auth0.com',
      clientId: 'IMGqmrKqpxLeWj8WYyjj8lhxsh4DecPw'
    }),],
    exports:[],
  declarations: [AppComponent, HelloComponent, ProductsComponent, HomeComponent, LoginSignupModalComponent, LoginModalComponentComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class AppModule {}
