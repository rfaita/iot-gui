import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IotCardComponent } from './iot-card.component';

describe('IotCardComponent', () => {
  let component: IotCardComponent;
  let fixture: ComponentFixture<IotCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IotCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
