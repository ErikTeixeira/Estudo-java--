import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

  // esse decorator é pra dizer que está classe é um componente
@Component({
    // nome para se referir a este componente se quiser utilizar ele em outro componente 
  selector: 'app-home',
    // utilizar componentes que não tem módulos
  standalone: true,
    // coloca em imports tudo que o component for usar de módulos extras em angular
      // importo o CommonModule para funcionar o *ngIf
  imports: [CommonModule],
    // url do template desse componente
  templateUrl: './home.component.html',
    // url do estilo do componente
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /**
   * meuBoleano = false;

    atualizaBoleano( valor: boolean ) {
      this.meuBoleano = valor;
    }
   */

  name = "Urso";
  idButton = "1234";
  deveMostrarTitulo = false;
  
  // método para chamar no botão, e o parâmetro são os dados qe quando aperta o botão
  submit( event: any ) {
    console.log("Submited");
    console.log( event );
  }

}

// 53:54