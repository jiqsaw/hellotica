import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { YaseminComponent } from './yasemin.component';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';

import { YaseminService } from './yasemin.service';
import { SafePipe } from '../security.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    YaseminComponent, 
    DetailComponent, 
    MainComponent,
    SafePipe
  ],
  providers: [
    YaseminService
  ]
})
export class YaseminModule { }
