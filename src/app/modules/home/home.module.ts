import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { FormsModule } from '@angular/forms';
import { provideEnvironmentNgxMask, NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule,FormsModule,NgxMaskDirective, NgxMaskPipe],
  providers: [
    provideEnvironmentNgxMask(), 
  ],
  schemas: [],
})
export class HomeModule {}
