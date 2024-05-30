import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  formulario : FormGroup;
  cliente: Observable<Cliente>;

  constructor(private fb : FormBuilder, private _servicio : ClientesService, 
    private routeManager : ActivatedRoute){
    
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      birthDate: [new Date(), Validators.required],
      createAt: [new Date(), Validators.required],
      email: ['', [Validators.required, Validators.email]],
      active: [true, Validators.required]
    })

    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        
      }
    })
  }

  onSubmit() {
    this.formulario.markAllAsTouched()

    console.info('Valor del formulario: ', this.formulario.value)
    console.info('Validez del formulario: ', this.formulario.valid)
  }

  public getError(controlName : string, name : string){
    if(this.formulario.get(controlName) != null
      && this.formulario.get(controlName).touched
      && this.formulario.get(controlName).invalid){
        if(this.formulario.get(controlName).hasError('required')){
          return `El campo ${name} es obligatorio.`;
        } else if(this.formulario.get(controlName).hasError('minlength')){
          return `El campo ${name} debe tener al menos 11 digitos.`
        }else if(this.formulario.get(controlName).hasError('maxlength')){
          return `El campo ${name} debe tener como maximo 11 digitos.`
        }
      }

      return '';
  }
}
