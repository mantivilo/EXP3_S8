import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LigaChilenaComponent } from './pages/ligachilena/ligachilena.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: 'lista-clientes', component: AdminComponent},
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ligachilena', component: LigaChilenaComponent },
  { path: 'admin', component: AdminComponent } 
];
