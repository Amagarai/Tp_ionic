import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  userList: any[];
  userSave: any[];

  constructor(public fire : AngularFirestore) { }

  async ngOnInit() {
    this.fire.collection('user').valueChanges().subscribe(getList =>{
      this.userList = getList;
      this.userSave = getList
    })
  }
  async initUser(): Promise<any> {
    this.userList= this.userSave;
  }

  async filterList(evt) {
    this.initUser();
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.userList = this.userList.filter(search => {
      if (search.userName && searchTerm) {
        if(search.userName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }
}
