import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialComponent } from './historial.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NadvarUserComponent } from 'src/app/shared/components/nadvar-user/nadvar-user.component';
import { SiderbarUserComponent } from 'src/app/shared/components/siderbar/siderbar-user/siderbar-user.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HistorialComponent', () => {
  let component: HistorialComponent;
  let fixture: ComponentFixture<HistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialComponent, NadvarUserComponent, SiderbarUserComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(HistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
      // Tests that 'listarHistorialPorUsuario' method of HistorialService is called with correct argument
      it('test_happy_path_listarHistorialPorUsuario_called_with_correct_argument', () => {
        spyOn(component.historialS, 'listarHistorialPorUsuario').and.callThrough();
        component.obtenerProductos();
        expect(component.historialS.listarHistorialPorUsuario).toHaveBeenCalledWith(component.usuario);
    });
    
});
