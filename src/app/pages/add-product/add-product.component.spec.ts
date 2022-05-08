import { mockForm } from './../../mocks/index';
import { EMPTY, Subject } from 'rxjs';
import { ProductService } from './../../services/product.service';
import { AddProductComponent } from './add-product.component';
import { MockBuilder, MockInstance, MockRender, ngMocks } from 'ng-mocks';
import { AppModule } from "../../app.module";
import { FormsModule, NgModel } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { fakeAsync, tick } from '@angular/core/testing';

// ngMocks.defaultMock(ProductService, () => ({
//   addProductToDB: () => EMPTY,
// }));

describe('AddProductComponent', () => {
  let addProductToDB$: Subject<any>;
  beforeEach(() => MockBuilder(AddProductComponent, AppModule)
    .mock(ProductService, {
      addProductToDB: () => addProductToDB$
    })
    .keep(FormsModule)
    .keep(MatInput));

  beforeEach(() => {
    addProductToDB$ = new Subject();
  })

  it('should be defined', () => {
    const fixture = MockRender(AddProductComponent);
    expect(fixture.point.componentInstance).toBeDefined();
  })

  it('should test the Title control', () => {
    const fixture = MockRender(AddProductComponent);
    const component = fixture.point.componentInstance;

    const titleInputEl = ngMocks.find(['data-testid', 'titleControl']);
    ngMocks.change(titleInputEl, 'cool cap');
    expect(component.addForm.value.title).toBe('cool cap')
  });

  it('should test the Title control to be defined', () => {
    MockRender(AddProductComponent);
    const titleInputEl = ngMocks.find(['data-testid', 'titleControl']);
    expect(ngMocks.get(titleInputEl, MatInput, undefined)).toBeDefined();
    expect(ngMocks.get(titleInputEl, NgModel, undefined)).toBeDefined();
  });

  it('should test onSubmit', () => {
    const fixture = MockRender(AddProductComponent);
    const prodService = ngMocks.findInstance(ProductService);
    const spy = jest.spyOn(prodService, 'addProductToDB');
    const component = fixture.point.componentInstance;
    component.onSubmit(mockForm as any);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  })

  it('should reset the form and show the alert upon successful save', () => {

    const fixture = MockRender(AddProductComponent);
    const component = fixture.point.componentInstance;
    const formSpy = jest.spyOn(component.addForm, 'resetForm');
    component.onSubmit(mockForm as any);
    addProductToDB$.next(EMPTY);
    expect(component.isAdded).toBeTruthy();
    expect(formSpy).toHaveBeenCalled();

  });

});
