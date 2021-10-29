import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( public serv: ServiceService, public create: AngularFirestore, public toast: ToastController) { }

  ngOnInit() {
  }

  register(data){
    try {
      if(data.value.email=="" || data.value.name==""|| data.value.password=="" ||data.value.con_pass==""){
          this.serv.presentToast("remplissez tout les champs");
      }else{
        this.serv.registerUser(data.value.email, data.value.password).then( response =>{
          console.log(response);
          if(data.value.password == data.value.conf_pass){
            this.create.collection('user').doc(response.user.uid).set({
              'userName' : data.value.name,
              'userEmail' : data.value.email,
              'userPassword' : data.value.password
            });
            
          }else{
            console.log('reessayer');
          }
        },
      )
      }
    } catch (error) {
      
    }
    data.value.name ="";
    data.value.email="";
    data.value.password="";
    data.value.con_pass="";
  }
}
