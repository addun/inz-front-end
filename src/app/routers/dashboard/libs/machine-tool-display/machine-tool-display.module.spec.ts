import { MachineToolDisplayModule } from './machine-tool-display.module';

describe('MachineToolDisplayModule', () => {
  let machineToolDisplayModule: MachineToolDisplayModule;

  beforeEach(() => {
    machineToolDisplayModule = new MachineToolDisplayModule();
  });

  it('should create an instance', () => {
    expect(machineToolDisplayModule).toBeTruthy();
  });
});
