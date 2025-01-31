import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import localeEsEc from '@angular/common/locales/es-EC';
import localeEnUS from '@angular/common/locales/en-CA';
import localeEsFr from '@angular/common/locales/fr-CA';


import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsEc );
registerLocaleData( localeEnUS );
registerLocaleData( localeEsFr );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    PrimeNgModule,
    SharedModule,
],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-EC' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
