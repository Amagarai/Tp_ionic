import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule],
  providers: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
