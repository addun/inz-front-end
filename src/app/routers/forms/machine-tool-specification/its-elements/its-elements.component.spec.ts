import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItsElementsComponent} from './its-elements.component';

describe('ItsElementsComponent', () => {
  let component: ItsElementsComponent;
  let fixture: ComponentFixture<ItsElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItsElementsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
