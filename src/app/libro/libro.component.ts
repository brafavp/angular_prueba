import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
  @Input() tituloLibro: string;

  //output indica que sale de la clase
  @Output() libroClicked = new EventEmitter();

  onClicked() {
    //este evento pasa al padre
    this.libroClicked.emit();
  }
}
