import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  standalone: false,
  templateUrl: './listado-noticias.component.html',
  styleUrl: './listado-noticias.component.css'
})
export class ListadoNoticiasComponent implements OnInit {
  
  @Input() listaNoticias: any
  ngOnInit(): void {
    
  }

}
