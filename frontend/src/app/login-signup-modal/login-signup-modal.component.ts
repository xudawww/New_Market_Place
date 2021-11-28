import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { FormGroup, FormControl } from '@angular/forms';
import * as UserActions from '../../rxjs/action/user.action';
import { Store } from '@ngrx/store';
import UserState from '../../rxjs/state/user.state';
@Component({
  selector: 'app-login-signup-modal',
  templateUrl: './login-signup-modal.component.html',
  styleUrls: ['./login-signup-modal.component.css']
})
export class LoginSignupModalComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(''),
    nickname: new FormControl(''),
    pass: new FormControl(''),
    compass: new FormControl(''),
    email: new FormControl(''),
  });
    iflogin:boolean = true;
    data = {} as any;
    constructor(private store: Store<{ users: UserState }>) { }
    login() 
      {this.iflogin = true;}
    signup()
      {this.iflogin = false;}
    ngOnInit(): void 
      {}
    tabChanged = (event:any): void => {
      const tab = event.tab.textLabel;
      this.iflogin = tab==='登录';
    }
    onSubmit( ) { 
      this.store.dispatch(
        UserActions.CreateUserAction({payload:{username:'test',nickname:'test',ava:'test',password:'test',email:'test'}})
      );
   

    }
  }