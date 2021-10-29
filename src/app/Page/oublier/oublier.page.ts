import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-oublier',
  templateUrl: './oublier.page.html',
  styleUrls: ['./oublier.page.scss'],
})
export class OublierPage implements OnInit {

  constructor(private route: Router, private auth: AngularFireAuth, private serv: ServiceService) { }

  ngOnInit() {
    this.auth.authState.subscribe(auth =>{
      if(!auth){
        this.route.navigate(['login']);
      }
    })
  }
  tost(){
    this.serv.presentToast("");
  }

}
