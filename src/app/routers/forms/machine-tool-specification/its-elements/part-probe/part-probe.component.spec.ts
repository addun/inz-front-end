import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PartProbeComponent} from './part-probe.component';

describe('PartProbeComponent', () => {
  let component: PartProbeComponent;
  let fixture: ComponentFixture<PartProbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartProbeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartProbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
