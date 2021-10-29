import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private auth: AngularFireAuth, private route: Router) { }

  ngOnInit() {
    this.auth.authState.subscribe(auth =>{
      if(!auth){
        this.route.navigate(['login']);
      }
    })
  }

}
