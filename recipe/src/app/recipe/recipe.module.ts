import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';



@NgModule({
  declarations: [
    RecipeDetailsComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipeModule { }
