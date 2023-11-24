import { Component} from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {
  visible = false;
  usuarioNombre = 'Rafael Valle';
  usuarios = ['Rafael Valle', 'Juan Perez', 'Maria Lopez']

  constructor() {
    setTimeout(() => {
      this.visible = true;
    }, 3000);
  }

  agregarUsuario() {
    this.usuarios.push(this.usuarioNombre);
    this.usuarioNombre = '';
  }
}
