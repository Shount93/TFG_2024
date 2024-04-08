import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { PersonalProfileComponent } from './pages/personal-profile/personal-profile.component';


@NgModule({
  declarations: [
    PersonalProfileComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule
  ]
})
export class ProfilesModule { }
