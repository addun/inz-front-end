import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChuckFormComponent} from './chuck-form.component';

describe('ChuckFormComponent', () => {
  let component: ChuckFormComponent;
  let fixture: ComponentFixture<ChuckFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChuckFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
