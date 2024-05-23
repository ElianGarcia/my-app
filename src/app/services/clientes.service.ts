import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private baseUrl : string = "https://report-api.somee.com/api/clientes"

  constructor(private http: HttpClient) { }

  // Obtener lista de clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map(response => response),
      catchError(error => {
        console.error(error)
        return of([]);
      })
    );
  }

  // Obtener cliente (buscado por id)
  getClienteById(clienteId: number): Observable<Cliente | undefined> {
    return this.http.get<Cliente>(this.baseUrl + '/' + clienteId).pipe(
      map(response => response),
      catchError(err => {
        console.error(err)
        return of()
      })
    )
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      map(response => response),
      catchError(err => {
        console.error("Ha habido un error al enviar el cliente", err);
        return of(null);
      })
    );
  }

  // Editar cliente
  editCliente(clienteData: Cliente): Observable<Cliente | undefined> {
    return this.http.post<Cliente>(this.baseUrl, clienteData).pipe(
      map(response => response),
      catchError(err => {
        console.error("Ha habido un error al enviar el cliente", err);
        return of(null);
      })
    );
  }
}
