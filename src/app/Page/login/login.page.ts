import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: any;

  constructor( private serv: ServiceService, private route: Router, private fire: AngularFirestore,public auth: AngularFireAuth, private toast: ToastController) { }

  ngOnInit() {
  }
  Verifi_log(data){
    try {
      if(data.value.email !='' || data.value.password !=''){
        return this.serv.loginUser(data.value.email, data.value.password).then(res =>{
          console.log(res),
          this.route.navigate(['/tabs'])
        })
      }else{
        this.serv.presentToast("Remplissez touts les champs");
      }
    } catch (error) {
      console.log(error);
       this.serv.presentToast("error de pass");
    }
    
  }

  
}
