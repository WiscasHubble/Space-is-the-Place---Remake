import { Routes } from '@angular/router';
import { navbarComponent } from './Components/Shared/navbar/navbar.component';
import { AppComponent } from './app.component';
import { WelcomeComponentPage } from './pages/welcome/welcome.component';
import { VisitsComponentPage } from './pages/visits/visits.component';
import { StarshipsComponentPage } from './pages/starships/starships.component';
import { AboutComponentPage } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponentPage
    },
    {
        path: 'visits',
        component: VisitsComponentPage
    },
    {
        path: 'starships',
        component: StarshipsComponentPage
    },
    {
        path: 'about',
        component: AboutComponentPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];
