import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  itemsCollect: AngularFirestoreCollection; //la collection dans firestore
  items: Observable<any[]>; //pour lire la collectio

  constructor( public fire : AngularFirestore, public route: Router ) { }

  ngOnInit() {
    this.getData();
  }

  async getData(){
    this.itemsCollect = this.fire.collection('user'); //donnee la collection user à itemCollect
    this.items = this.itemsCollect.valueChanges();
    console.log(this.items);
  }

  profil(){
    this.route.navigate(['profile']);
  }



}
