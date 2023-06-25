import { RecipeService } from './../../common/recipeService/recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

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
      'assets/image/pavBhaji.jpeg'
    ),new Recipe(
      'Carrot halwa',
      'A Dessert from carrot',
      'assets/image/carrothalwa.jpeg'
    ),
  ];

  constructor(private recipeService:RecipeService) {}

  ngOnInit() {
    this.recipeService.setRecipes(this.recipe)
    const rec = this.recipeService.getRecipes()
    console.log(rec);

    this.recipeService.selectedRecipe.subscribe((recipe:Recipe)=>{
      this.selectedRecipe = recipe
    })
  }

}
