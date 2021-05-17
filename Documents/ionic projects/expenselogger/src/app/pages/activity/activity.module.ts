import { IonicModule } from '@ionic/angular';
import { ActivityComponent } from './activity.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ActivityComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActivityComponent
      }
    ])
  ]
})
export class ActivityModule { }
