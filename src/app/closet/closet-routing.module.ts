import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AddClothesPageComponent } from './pages/add-clothes-page/add-clothes-page.component';
import { ClothesListPageComponent } from './pages/clothes-list-page/clothes-list-page.component';
import { CreateSetPageComponent } from './pages/create-set-page/create-set-page.component';
import { ClothesPageComponent } from './pages/clothes-page/clothes-page.component';



// localhost:4200/closet/
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'profile', component: ProfilePageComponent },
      { path: 'add-clothes', component: AddClothesPageComponent },
      { path: 'edit-clothes/:id', component: AddClothesPageComponent },
      { path: 'list', component: ClothesListPageComponent },
      { path: 'create-set', component: CreateSetPageComponent },
      { path: 'edit-set/:id', component: CreateSetPageComponent },
      { path: ':id', component: ClothesPageComponent },
      { path: '**', redirectTo: 'list' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosetRoutingModule { }
