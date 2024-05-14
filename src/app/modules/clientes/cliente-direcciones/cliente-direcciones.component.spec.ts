import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDireccionesComponent } from './cliente-direcciones.component';

describe('ClienteDireccionesComponent', () => {
  let component: ClienteDireccionesComponent;
  let fixture: ComponentFixture<ClienteDireccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteDireccionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
