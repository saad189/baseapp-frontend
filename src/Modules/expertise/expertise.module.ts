import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertiseRoutingModule } from './expertise-routing.module';
import { ExpertiseComponent } from './expertise.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExpertiseComponent
  ],
  imports: [
    CommonModule,
    ExpertiseRoutingModule,
    SharedModule
  ]
})
export class ExpertiseModule { }
