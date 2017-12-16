import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MachineToolElementsComponent} from './machine-tool-elements.component';


describe('MachineToolElementComponent', () => {
  let component: MachineToolElementsComponent;
  let fixture: ComponentFixture<MachineToolElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MachineToolElementsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineToolElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
