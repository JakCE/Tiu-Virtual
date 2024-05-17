import { Routes } from '@angular/router';
import { TIUVirtualComponent } from './components/tiuvirtual/tiuvirtual.component';
import { LoginComponent } from './login/login.component';
import { TiuRodrigoComponent } from './components/tiu-rodrigo/tiu-rodrigo.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'tiu1', component: TIUVirtualComponent },
    { path: 'tiu2', component: TiuRodrigoComponent }
];
