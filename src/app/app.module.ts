import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CP1Directive } from './cp1.directive';
import { CP2Directive } from './cp2.directive';
import { CP3Directive } from './cp3.directive';
import { CP4Directive } from './cp4.directive';
import { CP5Directive } from './cp5.directive';
import { CP6Directive } from './cp6.directive';
import { CP7Directive } from './cp7.directive';
import { CP8Directive } from './cp8.directive';
import { CP9Directive } from './cp9.directive';
import { CP10Directive } from './cp10.directive';
import { CP11Directive } from './cp11.directive';
import { ListenDemoComponent } from './listen-demo.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CP1Directive,
    CP2Directive,
    CP3Directive,
    CP4Directive,
    CP5Directive,
    CP6Directive,
    CP7Directive,
    CP8Directive,
    CP9Directive,
    CP10Directive,
    CP11Directive,
    ListenDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
