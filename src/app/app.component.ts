import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Noticias';

 constructor(private _noticiasService :NoticiasService){

 }
  BuscarNoticias(parametros:any){
      console.log('soy el padre'),
      console.log(parametros)

      this._noticiasService.getNoticias(parametros).subscribe(data=>{
        console.log(data)
      }
      )
  }
}
