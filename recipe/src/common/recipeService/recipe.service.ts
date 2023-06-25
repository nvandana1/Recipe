import { Recipe } from './../../app/recipe/recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes!:Recipe[];
  selectedRecipe = new EventEmitter<Recipe>
  constructor() { }

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
  }

  getRecipes(){
    return {...this.recipes};
  }
}
