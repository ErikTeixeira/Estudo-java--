import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviaFormService } from '../../services/envia-form.service';

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
  listItems = [1, 2, 3];

    // faz a instancia do tipo do EnviaFormService  -> deixar private
  private enviaFormService = inject(EnviaFormService);

    // recebe como nomePassado, mas usa aqui o nome propsDeFora
  @Input( "nomePassado" ) propsDeFora!: string;

  @Output() emitirValor = new EventEmitter<string>();
  
    // coloca no envia-form.service.ts  -> para conseguir utilizar em mais de um componente
  // método para chamar no botão, e o parâmetro são os dados qe quando aperta o botão
  /*
  submit( event: any ) {
    console.log("Submited");
    console.log( event );
  }
  */

  submit( event: any ) {
    this.enviaFormService.enviaBackend( event );

    this.emitirValor.emit( this.name );
  }

  logar( event: string ) {
    console.log(event);
  }

}
