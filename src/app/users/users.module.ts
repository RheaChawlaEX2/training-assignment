import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './component/user-card/user-card.component';
import { UserCardListComponent } from './component/user-card-list/user-card-list.component';




@NgModule({
  declarations: [
    UserCardComponent,
    UserCardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserCardComponent,
    UserCardListComponent
  ]
})
export class UsersModule { }
