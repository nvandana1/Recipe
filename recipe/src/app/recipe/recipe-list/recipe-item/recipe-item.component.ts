import { RecipeService } from './../../../../common/recipeService/recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() rec!:Recipe;
  constructor(private recipeService:RecipeService){}
  selectedItem(recipe: Recipe) {
    this.recipeService.selectedRecipe.emit(recipe)
  }
}
