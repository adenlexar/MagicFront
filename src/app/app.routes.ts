import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { CardsComponent } from "./cards/cards.component";
import { CardDetailsComponent } from "./card-details/card-details.component";

export const routes: Routes = [
  {path: '', component: CardsComponent},
  {path: 'cards', component:CardsComponent},
  {path: 'cards/:id', component:CardDetailsComponent}
];
