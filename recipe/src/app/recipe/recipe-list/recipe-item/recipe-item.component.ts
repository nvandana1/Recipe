import { Recipe } from './../../recipe.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
@Output() sendRecipe = new EventEmitter();
  @Input() rec!:Recipe;
  constructor(){}
  selectedItem(recipe: Recipe) {
   this.sendRecipe.emit(recipe)
  }
}
