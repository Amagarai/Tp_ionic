import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import {FirebaseApp} from 'firebase/app'

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.page.html',
  styleUrls: ['./change-pass.page.scss'],
})
export class ChangePassPage implements OnInit {

  user: any;
  user_conect: FirebaseApp;
  constructor(public auth: AngularFireAuth, public fire: AngularFirestore, private route: Router ) { }

  ngOnInit() {
    this.auth.authState.subscribe(auth =>{
      if(!auth){
        this.route.navigate(['login']);
      }
    })
  }
  updatePass(pass){
    if(pass.value.old_pass!='' && pass.value.new_pass!='' && pass.value.conf_new!='' ){
      this.auth.authState.subscribe(auth =>{
        if(auth){
          this.fire.collection('user').doc(auth.uid).valueChanges().subscribe(result => {
            this.user = result;
            if(this.user.userPassword == pass.value.old_pass){
              if(pass.value.new_pass == pass.value.conf_new ){
                auth.updatePassword(pass.value.new_pass);
                this.fire.collection('user').doc(auth.uid).update({
                  'userPassword': pass.value.new_pass
                });
                console.log("modifier avec succes");
              }else{
                console.log("le nouveau mot de passe et l'ancien sont different");
              }
            }else {
              console.log("Ancien mot de passe incorrecte");
            }
          });
        }else{
          console.log("non encore connecter");
        }
      })
    }else{
      console.log(" vous n'etes pas connecter");
    }
  }
}
