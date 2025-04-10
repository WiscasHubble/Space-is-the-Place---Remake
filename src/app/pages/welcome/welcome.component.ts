import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { HomecardsComponent } from "../../Components/homecards/homecards.component";

@Component({
  selector: 'app-welcome',
  imports: [FieldsetModule, ButtonModule, HomecardsComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponentPage {

}
