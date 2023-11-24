import { Component } from '@angular/core';

@Component({
  //identificador del componente en el html index
  selector: 'app-root',
  //template del componente
  templateUrl: './app.component.html',
  //estilos del componente
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular10';
}
