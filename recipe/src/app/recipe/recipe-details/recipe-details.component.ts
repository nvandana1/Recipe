import { RecipeService } from './../../../common/recipeService/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent  implements OnInit{
  selectedRecipe!:Recipe;
  constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe:Recipe)=>{
      this.selectedRecipe = recipe;
    })
  }
}
