import { Routes } from '@angular/router';
import { TIUVirtualComponent } from './components/tiuvirtual/tiuvirtual.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: TIUVirtualComponent }
];
