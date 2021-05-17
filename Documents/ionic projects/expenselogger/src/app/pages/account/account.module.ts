import { IonicModule } from '@ionic/angular';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent
      }
    ])
  ]
})
export class AccountModule { }
