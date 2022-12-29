import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertiseRoutingModule } from './expertise-routing.module';
import { ExpertiseComponent } from './expertise.component';


@NgModule({
  declarations: [
    ExpertiseComponent
  ],
  imports: [
    CommonModule,
    ExpertiseRoutingModule
  ]
})
export class ExpertiseModule { }
