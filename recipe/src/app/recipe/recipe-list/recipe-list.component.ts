import { Recipe } from './../recipe.model';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

@Output() recipeEmitter=new EventEmitter();

@Input() recipe!:Recipe[];

constructor(){}

selectedRecipe(recipe: Recipe) {
this.recipeEmitter.emit(recipe)
}
}
