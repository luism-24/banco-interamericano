import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { ConsignmentComponent } from './components/consignment/consignment.component';
import { RetireComponent } from './components/retire/retire.component';
import { HomeComponent } from './components/home/home.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { SideNavComponent } from './components/commons/side-nav/side-nav.component';
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TransferComponent,
    ConsignmentComponent,
    RetireComponent,
    MovimientosComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
