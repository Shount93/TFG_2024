import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalProfileComponent } from './pages/personal-profile/personal-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
