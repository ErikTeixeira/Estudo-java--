import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    {
            // vazio é pra url inicial, a que inicia o site
        path: "",
        component: HomeComponent
    }
];

