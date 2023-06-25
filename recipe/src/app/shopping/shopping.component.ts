import { Ingredient } from './ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  ingredients:Ingredient[]=[new Ingredient('Potato',1,'Kg')]
}
