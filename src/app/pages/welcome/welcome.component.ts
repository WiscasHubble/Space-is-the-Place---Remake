import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { HomecardsComponent } from "../../Components/homecards/homecards.component";
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-welcome',
  imports: [FieldsetModule, ButtonModule, HomecardsComponent, PanelModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponentPage {

}
