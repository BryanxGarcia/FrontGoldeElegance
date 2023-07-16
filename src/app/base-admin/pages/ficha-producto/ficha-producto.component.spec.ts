import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaProductoComponent } from './ficha-producto.component';
import { NadvarUserComponent } from 'src/app/shared/components/nadvar-user/nadvar-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('FichaProductoComponent', () => {
  let component: FichaProductoComponent;
  let fixture: ComponentFixture<FichaProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichaProductoComponent, NadvarUserComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    });
    fixture = TestBed.createComponent(FichaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
      // Tests that 'buscarPorId' method is called with the correct 'id' parameter
      it('test_valid_id', () => {
        spyOn(component.productosService, 'buscarPorId').and.callThrough();
        component.id = 1;
        component.obtenerProducto();
        expect(component.productosService.buscarPorId).toHaveBeenCalledWith(1);
    });
        // Tests that the response from 'buscarPorId' method is assigned to 'Producto' property
        it('test_assign_response', () => {
          const mockResponse = {
              pkProducto: 1,
              nombreProducto: 'Test Product',
              descripcion: 'Test Description',
              fkCategoria: 1,
              precioVenta: 10,
              inventario: 5,
              imagen: 'test-image.jpg'
          };
          spyOn(component.productosService, 'buscarPorId').and.returnValue(of(mockResponse));
          component.id = 1;
          component.obtenerProducto();
          expect(component.Producto).toEqual(mockResponse);
      });
});
