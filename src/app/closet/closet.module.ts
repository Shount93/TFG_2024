import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosetRoutingModule } from './closet-routing.module';
import { AddClothesPageComponent } from './pages/add-clothes-page/add-clothes-page.component';
import { ClothesListPageComponent } from './pages/clothes-list-page/clothes-list-page.component';
import { CreateSetPageComponent } from './pages/create-set-page/create-set-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ClothesPageComponent } from './pages/clothes-page/clothes-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
    AddClothesPageComponent,
    ClothesListPageComponent,
    CreateSetPageComponent,
    ProfilePageComponent,
    ClothesPageComponent,
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    ClosetRoutingModule
  ]
})
export class ClosetModule { }
