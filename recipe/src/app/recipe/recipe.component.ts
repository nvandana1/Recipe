import { RecipeService } from './../../common/recipeService/recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/assets/model/ingredient.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  selectedRecipe! :Recipe;
  recipe: Recipe[] = [
    new Recipe(
      'Pav Bhaji',
      'A bun and masala curry',
      'assets/image/pavBhaji.jpeg',[new Ingredient('Pav bread',1,'pack')]
    ),new Recipe(
      'Carrot halwa',
      'A Dessert from carrot',
      'assets/image/carrothalwa.jpeg',[new Ingredient('Carrot',1,'piece')]
    ),
  ];

  constructor(private recipeService:RecipeService) {}

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe:Recipe)=>{
      this.selectedRecipe = recipe
    })
  }

}
