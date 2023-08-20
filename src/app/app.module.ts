import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { CustomerModule } from './modules/customer/customer.module';
import { PainelHeaderComponent } from './core/components/painel-header/painel-header.component';

@NgModule({
  declarations: [
    AppComponent, 
    PainelHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HomeModule, CustomerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
