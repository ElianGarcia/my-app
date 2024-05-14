import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionDetailComponent } from './direccion-detail.component';

describe('DireccionDetailComponent', () => {
  let component: DireccionDetailComponent;
  let fixture: ComponentFixture<DireccionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
