import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RetireComponent } from './components/retire/retire.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { ConsignmentComponent } from './components/consignment/consignment.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'transferencia', component: TransferComponent },
  { path: 'retiro', component: RetireComponent },
  { path: 'consignacion', component: ConsignmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
