import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosetRoutingModule } from './closet-routing.module';
import { AddClothesPageComponent } from './pages/add-clothes-page/add-clothes-page.component';
import { ClothesListPageComponent } from './pages/clothes-list-page/clothes-list-page.component';
import { CreateSetPageComponent } from './pages/create-set-page/create-set-page.component';
import { ClothesPageComponent } from './pages/clothes-page/clothes-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { ClothesImagePipe } from './pipes/clothes-image.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClothesAltImagePipe } from './pipes/clothes-altimage.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AddClothesPageComponent,
    ClothesListPageComponent,
    CreateSetPageComponent,
    ClothesPageComponent,
    LayoutPageComponent,
    CardComponent,
    ClothesImagePipe,
    ClothesAltImagePipe,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    ClosetRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClosetModule { }
