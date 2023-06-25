import { Recipe } from './../../app/recipe/recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes!:Recipe[];
  private recipe!:Recipe;
  constructor() { }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
  }

  getRecipes(){
    return {...this.recipes};
  }

  setRecipe(recipe:Recipe){
    this.recipe = recipe
  }

  getRecipe(){
    return {...this.recipe};
  }
}
