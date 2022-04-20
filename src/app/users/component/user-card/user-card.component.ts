
import { Component, Input, OnInit,Output,EventEmitter, AfterContentInit
 } from '@angular/core';
import { User } from '../../model/userModel';



@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
// data:any [] = [];

export class UserCardComponent implements OnInit {

   

@Input()
 user?: User;
 @Input()
 displayNone: any ;
 background: any;
//  isDeleted: boolean;
//  count: number = 0;

// @Input()
// deletedData: User | undefined;

 @Output()
 courseSelected = new EventEmitter<User>();

 @Output() 
 toggleRequest = new EventEmitter<User>();



  constructor() {
   }

  ngOnInit(): void {
  }


  onCourseView(){
    console.log("card component button clicked")
    this.courseSelected.emit(this.user)
    

  }
 
  toggle(): void {
    this.toggleRequest.emit(this.user);
    this.displayNone = this.displayNone ? '' : 'none';   
    this.background = this.background ? 'red' : 'white';
    
    if(this.user)
      this.user.isDeleted = this.user.isDeleted ? true : false;
      console.log("user is deleted," , this.user?.isDeleted)

  }

  
}