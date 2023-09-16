import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  searchCEPChange(value: any): void{
    console.log(value)
  }

  getFeminino(){
    
  }

  getMasculino(){

  }

  getInfantil(){

  }

  getOUTLET(){
    
  }
}
