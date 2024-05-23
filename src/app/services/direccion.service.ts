import { Injectable } from '@angular/core';
import { Direccion } from '../models/direccion';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  private baseUrl: string = 'https://report-api.somee.com/api/addresses';

  constructor(private http: HttpClient) { }

  // Obtener lista de direcciones
  getAddresses(): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(this.baseUrl).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
  }

  // Obtener dirección por id
  getAddressById(addressId: number): Observable<Direccion | undefined> {
    return this.http.get<Direccion>(`${this.baseUrl}/${addressId}`).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of(undefined);
      })
    );
  }

  // Obtener dirección por id
  getAddressByClientId(clientId: number): Observable<Direccion[]> {
    return this.http.get<Direccion[]>(`${this.baseUrl}/getByCliente/${clientId}`).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of(undefined);
      })
    );
  }

  // Agregar una nueva dirección
  addAddress(address: Direccion): Observable<Direccion | null> {
    return this.http.post<Direccion>(this.baseUrl, address).pipe(
      map(response => response),
      catchError(error => {
        console.error('Ha habido un error al enviar la dirección', error);
        return of(null);
      })
    );
  }

  // Editar dirección
  editAddress(address: Direccion): Observable<Direccion | null> {
    return this.http.post<Direccion>(this.baseUrl, address).pipe(
      map(response => response),
      catchError(error => {
        console.error('Ha habido un error al enviar la dirección', error);
        return of(null);
      })
    );
  }
}
