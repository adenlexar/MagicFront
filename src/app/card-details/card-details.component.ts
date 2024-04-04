import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatCard, MatCardImage} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [
    MatCardImage,
    NgOptimizedImage,
    MatCard
  ],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  constructor(private route: ActivatedRoute) { }
  magicCard:any = { "id": 1, "img": "../../assets/card_mock.png" }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // 'id' est le nom de votre paramètre dans votre route
    });
  }

}
