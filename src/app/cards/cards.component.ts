import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatCard, MatCardImage} from "@angular/material/card";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatHint} from "@angular/material/form-field";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    MatCard,
    MatCardImage,
    NgForOf,
    NgOptimizedImage,
    MatFormField,
    MatLabel,
    MatInput,
    MatHint
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  constructor(private router: Router){}
  magicCards: any = [
    { "id": 1, "img": "../../assets/card_mock.png" },
    { "id": 2,"img": "../../assets/card_mock.png" },
    { "id": 3,"img": "../../assets/card_mock.png" },
    { "id": 4,"img": "../../assets/card_mock.png" },
    { "id": 5,"img": "../../assets/card_mock.png" },
    { "id": 6,"img": "../../assets/card_mock.png" },
    { "id": 7,"img": "../../assets/card_mock.png" }
    //LE TABLEAU DE MOCK
  ];

  naviguerAvecId(id:number) {
    this.router.navigate(['/cards', id]);
  }
}
