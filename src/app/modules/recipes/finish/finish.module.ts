import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishPageRoutingModule } from './finish-routing.module';

import { FinishPage } from './finish.page';
import { ModalPageModule } from 'src/app/views/home/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishPageRoutingModule,
    ModalPageModule
  ],
  declarations: [FinishPage]
})
export class FinishPageModule {}
