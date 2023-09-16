import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-header',
  templateUrl: './painel-header.component.html',
  styleUrls: ['./painel-header.component.scss']
})
export class PainelHeaderComponent implements OnInit {
  
  searchText:string = '';


  ngOnInit(): void{
    
  }

searchChange(): void{
  console.log('Input value changed:', this.searchText);
}

}
