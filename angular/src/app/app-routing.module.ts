import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RetireComponent } from './components/retire/retire.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { ConsignmentComponent } from './components/consignment/consignment.component';
import { HomeComponent } from './components/home/home.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'transferencia', component: TransferComponent },
  { path: 'retiro', component: RetireComponent },
  { path: 'consignacion', component: ConsignmentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movimientos', component: MovimientosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
