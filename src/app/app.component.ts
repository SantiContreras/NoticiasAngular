import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';
import { error } from 'node:console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Noticias';
  
  listaNoticias : any = []
 constructor(private noticiasService :NoticiasService){

 }
  BuscarNoticias(parametros:any){
      console.log('soy el padre'),
      console.log(parametros)

      this.noticiasService.getNoticias(parametros).subscribe(data=>{
        console.log(data)
        this.listaNoticias = data.articles
      }, error => {
        console.log(error )
      }
      )
  }
}
