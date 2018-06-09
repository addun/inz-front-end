import { FormsDisplayModule } from './forms-display.module';

describe('FormsDisplayModule', () => {
  let formsDisplayModule: FormsDisplayModule;

  beforeEach(() => {
    formsDisplayModule = new FormsDisplayModule();
  });

  it('should create an instance', () => {
    expect(formsDisplayModule).toBeTruthy();
  });
});
