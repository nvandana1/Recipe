import { Recipe } from './recipe.model';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit{
  recipe: Recipe[] = [new Recipe('Pav Bhaji', 'A bun and masala curry', 'assets/image/pavBhaji.jpeg')];

  constructor(){}

  ngOnInit(){}
}
