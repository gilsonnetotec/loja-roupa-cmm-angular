import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { CustomerModule } from './modules/customer/customer.module';
import { PainelHeaderComponent } from './core/components/painel-header/painel-header.component';
import { FormsModule } from '@angular/forms';
import { provideEnvironmentNgxMask, NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent, 
    PainelHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HomeModule, CustomerModule, FormsModule,  NgxMaskDirective, NgxMaskPipe],
  providers: [
    provideEnvironmentNgxMask(), 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}