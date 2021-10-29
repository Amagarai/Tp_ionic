import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;

  constructor( private route: Router, private auth: AngularFireAuth, private fire: AngularFirestore, private serv: ServiceService ) { 
    this.auth.authState.subscribe(auth =>{
      if(auth){
        this.fire.collection('user').doc(auth.uid).valueChanges().subscribe(result => {
          this.user = result; 
          console.log(this.user);
        });
      }
    })
  }

  ngOnInit() {
    
  }
  logout(){
    this.serv.logOut();
    this.route.navigate(['login']);
  }
}


