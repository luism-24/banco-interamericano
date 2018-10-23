import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BancoComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { ConsignmentComponent } from './components/consignment/consignment.component';
import { RetireComponent } from './components/retire/retire.component';

@NgModule({
  declarations: [
    AppComponent,
    BancoComponent,
    LoginComponent,
    TransferComponent,
    ConsignmentComponent,
    RetireComponent,
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
