import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Direccion } from '../../../models/direccion';
import { DireccionService } from '../../../services/direccion.service';
import { ClientesService } from '../../../services/clientes.service';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direccion-form',
  templateUrl: './direccion-form.component.html',
  styleUrl: './direccion-form.component.css'
})
export class DireccionFormComponent {
  formulario : FormGroup;
  direccion : Direccion;
  clientes : Cliente[];

  constructor(private fb : FormBuilder, private _service : DireccionService,
    private _clientesService : ClientesService, private routeManager : ActivatedRoute
  ){
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      addressId: [null, Validators.required],
      alias: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      active: [true, Validators.required],
      createAt: [new Date().toISOString(), Validators.required],
      clienteId: [null, Validators.required]
    });

    this.getClientes()

    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
               
      }
    })
  }

  getClientes() {
    this._clientesService.getClientes().subscribe({
      next: (value) => {
        this.clientes = value
      },
      error: (error) => {
        console.error(error);
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
