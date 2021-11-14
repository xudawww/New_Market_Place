import { Component, VERSION,ViewEncapsulation  } from '@angular/core';
import { FishmenuComponent } from "../FishFramwork/fishmenu/fishmenu.component"
import {DomSanitizer} from '@angular/platform-browser';
import { FishOpenerService } from '../FishFramwork/fishModalOpener/fish-opener.service';
import {MatIconRegistry} from '@angular/material/icon';
import { LoginSignupModalComponent } from './login-signup-modal/login-signup-modal.component';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import UserState from '../rxjs/state/user.state';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as UserActions from '../rxjs/action/user.action';
const THUMBUP_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
      `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
      `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  profile:any;
  User: any;
  users$: Observable<UserState>;
  ngOnInit(): void {


      this.auth.user$.subscribe(
        (profile) => {
          if(profile!=null){
            this.profile = profile;
            localStorage.setItem('user_asduhu21askdh!@@!!@',JSON.stringify(profile));
          }
         
        },
      );
      


    
    this.users$.subscribe((x) => {
      this.User = x.User;
      console.log(this.User)
    });
    const self = this;
    if(localStorage.getItem('user_asduhu21askdh!@@!!@')!==null){
      const user = JSON.parse(localStorage.getItem('user_asduhu21askdh!@@!!@'));
      self.store.dispatch(
        UserActions.SetUserAction({ payload:user })
      );

    }
      
  
}
  constructor(private router: Router,public modalOpener:FishOpenerService,private route: ActivatedRoute,public dialog: MatDialog,public auth: AuthService,private store: Store<{ users: UserState }>){
    this.users$ = this.store.select((store) => store.users);
  }
  loginModalTrigger(){
    const self = this;
    if(localStorage.getItem('user_asduhu21askdh!@@!!@')){   
       this.router.navigate(['profile']);  
    }
    else{
       this.auth.loginWithRedirect();
    }
    
  }
  myCallbackFunction() {
    this.modalOpener.open(LoginSignupModalComponent,null,{width:'400px',height:'530px'})
  }
}
