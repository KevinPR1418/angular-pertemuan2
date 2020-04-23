import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HimeComponent } from './hime/hime.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
import { DetailComponent } from './detail/detail.component';


const ROUTES: Routes =[
  {path: '', component:HimeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'detail', component:DetailComponent},
  {path: 'detail/:id', component:DetailComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, HimeComponent, LoginComponent, DetailComponent ],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }

