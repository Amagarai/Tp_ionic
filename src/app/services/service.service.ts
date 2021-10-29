import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  constructor(public auth : AngularFireAuth, public fire: AngularFirestore, private toast: ToastController) { }

  loginUser(email, password){
    return new Promise<any>((resolve,reject) =>{
      this.auth.signInWithEmailAndPassword(email, password).then(
        res =>resolve(res),
        error => reject(error),
      )
    })
  }

  registerUser(email , password){
    return new Promise<any>((resolve,reject) =>{
      this.auth.createUserWithEmailAndPassword(email, password).then(
        res =>resolve(res),
        error => reject(error)
      )
    })
  }
  logOut(){
    this.auth.signOut();
  }
  async presentToast(mess:string) {
    const toast = await this.toast.create({
      message: mess,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
