import { Component, OnInit,ContentChild,TemplateRef } from '@angular/core';
// import { threadId } from 'worker_threads';
import {USERS} from '../../../../assets/data';
import { User } from '../../model/userModel';
@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css']
})
export class UserCardListComponent implements OnInit {
  users = USERS;
  data:User[] = [];
 
 
  constructor() { 
   
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  onCourseSelected(user: User){
    console.log('App component-clicked event bubbled',user)
  }

  toggleUser(user: User){
    if(user)
    user.isDeleted = !user.isDeleted;
  }

  

  // addUser(user: User){
  //   this.users.push(user);
  // }

}
