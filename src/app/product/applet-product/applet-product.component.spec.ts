import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppletProductComponent } from './applet-product.component';

describe('AppletProductComponent', () => {
  let component: AppletProductComponent;
  let fixture: ComponentFixture<AppletProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppletProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppletProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
