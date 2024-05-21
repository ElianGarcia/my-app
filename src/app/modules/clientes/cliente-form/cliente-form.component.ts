import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../../../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  formulario: FormGroup;
  client: Observable<Cliente>;

  constructor(private fb: FormBuilder, private _servicio : ClientesService,
    private routeManager : ActivatedRoute, private router : Router) {
    
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      birthDate: [new Date().getDate(), Validators.required],
      createAt: [new Date().getDate()],
      email: ['', Validators.email],
      active: [true]
    })

    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this._servicio.getClienteById(+params['id']).subscribe({
          next: (value) => {
            this.formulario.patchValue(value)
          },
          error: (err) => {
            console.log('Error: ', err)
          },
        })        
      }
    })
  }

  onSubmit() {
    this.formulario.markAllAsTouched()

    if (this.formulario.valid) {
      this._servicio.addCliente(this.formulario.value).subscribe({
        next: (value) => {
          console.info('Cliente guardado exitosamente')
          this.router.navigate(['/clientes'])
        },
        error: (err) => {
          console.log(err)
        },
      })
    } else {
      console.info('formulario no valido')
    }
  }

  public getError(controlName: string, name: string): string {
    if (this.formulario.get(controlName) != null 
      && this.formulario.get(controlName).touched
      && this.formulario.get(controlName).invalid) {

      if (this.formulario.get(controlName)?.hasError('required')) {
        return `El campo ${name} es obligatorio.`;
      } else if (this.formulario.get(controlName)?.hasError('email')) {
        return `El campo ${name} debe ser un email válido.`;
      } else if (this.formulario.get(controlName)?.hasError('minlength')) {
        return `El campo ${name} debe tener como mínimo 11 caracteres.`;
      } else if (this.formulario.get(controlName)?.hasError('maxlength')) {
        return `El campo ${name} debe tener como máximo 11 caracteres.`;
      } else if (this.formulario.get(controlName)?.hasError('min')) {
        return `El campo ${name} debe tener como mínimo 1900.`;
      }
    }
    return '';
  }
}
