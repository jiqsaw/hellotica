import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { DetailComponent } from './yasemin/detail/detail.component';
import { MainComponent } from './yasemin/main/main.component';
import { YaseminComponent } from './yasemin/yasemin.component';


const routes: Routes = [
  {
    path: 'yasemin', component: YaseminComponent,
    children: [
      { path: '', component: MainComponent },
      { path: ':type', component: MainComponent },
      { path: 'detail/:name', component: DetailComponent },
    ]
  },
  {
    path: '', component: DefaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }