import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 
  @Input() titulo: string

  constructor(){
     this.titulo=""
  }
  

  ngOnInit():void{

  }
}
