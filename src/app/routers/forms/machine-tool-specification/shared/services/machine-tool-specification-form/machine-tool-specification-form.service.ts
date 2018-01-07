import {Injectable} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {MachineToolSpecification} from '../../../../shared/models';

@Injectable()
export class MachineToolSpecificationFormService {

  constructor() {
  }

  private _machineToolSpecificationForm = new FormGroup(MachineToolSpecification.getFormControls(new MachineToolSpecification({
    its_elements: [{
      name: 'test'
    }]
  })));

  get machineToolSpecificationForm() {
    return this._machineToolSpecificationForm;
  }

  set machineToolSpecificationForm(value) {
    this._machineToolSpecificationForm = value;
  }

  get installationForm() {
    return <FormGroup>this.machineToolSpecificationForm.controls['installation'];
  }

  get environmentalEvaluation() {
    return <FormGroup>this.machineToolSpecificationForm.controls['environmental_evaluation'];
  }

  get standardMachiningProcessForm() {
    return <FormArray>this.environmentalEvaluation.controls['power_for_standard_machining'];
  }

  get itsElements() {
    return <FormArray>this.machineToolSpecificationForm.controls['its_elements'];
  }

  getCapabilities(index) {
    return (<FormArray>this.itsElements.controls[index]).controls['capabilities'];
  }

  getChucks(index): FormArray {
    return this.getCapabilities(index).controls['chucks'];
  }

  getBarFeeders(index: number) {
    return this.getCapabilities(index).controls['bar_feeders'];

  }

  getCollets(index: number) {
    return this.getCapabilities(index).controls['collets'];
  }

  getTailstocks(index: number) {
    return this.getCapabilities(index).controls['tailstocks'];

  }

  getCoolants(index: number) {
    return this.getCapabilities(index).controls['coolants'];
  }

  getToolBreakages(index: number) {
    return this.getCapabilities(index).controls['tool_breakages'];
  }

  getPartProbes(index: number) {
    return this.getCapabilities(index).controls['part_probes'];
  }

  getToolSettings(index: number) {
    return this.getCapabilities(index).controls['tool_settings'];
  }

  getMachineToolAxes(index: number) {
    return this.getCapabilities(index).controls['machine_tool_axes'];
  }

  getLinearAxes(index: number) {
    return this.getCapabilities(index).controls['linear_axes'];
  }

  getContinuousRotaries(index: number) {
    return this.getCapabilities(index).controls['continuous_rotaries'];
  }

  getIndexings(index: number) {
    return this.getCapabilities(index).controls['indexings'];
  }

  getLimitedSwing(index: number) {
    return this.getCapabilities(index).controls['limited_swings'];
  }

  getPallets(index: number) {
    return this.getCapabilities(index).controls['pallets'];
  }

  getCircularWorkTables(index: number) {
    return this.getCapabilities(index).controls['circular_work_tables'];
  }

  getRectangularWorkTables(index: number) {
    return this.getCapabilities(index).controls['rectangular_work_tables'];
  }

  getTurrets(index: number) {
    return this.getCapabilities(index).controls['turrets'];
  }

  getToolChangers(index: number) {
    return this.getCapabilities(index).controls['tool_changers'];
  }

  getTurretContents(i: number, j: number) {
    return this.getTurrets(i).controls[j].controls['turret_contents'];

  }

  getToolMagazines(index: number) {
    return this.getCapabilities(index).controls['tool_magazines'];
  }

  getToolMagazineContents(index: number, j: number) {
    return this.getToolMagazines(index).controls[j].controls['tool_magazine_contents'];
  }

  getSpindles(index: number) {
    return this.getCapabilities(index).controls['spindles'];
  }

  getSpindleRange(index: number, j: number) {
    return this.getSpindles(index).controls[j].controls['range'];
  }

  getTaperedSpindles(index: number) {
    return this.getCapabilities(index).controls['tapered_spindles'];
  }

  getStraightSpindles(index: number) {
    return this.getCapabilities(index).controls['straight_spindles'];
  }

  getThreadedSpindles(index: number) {
    return this.getCapabilities(index).controls['threaded_spindles'];
  }

  getWorkSpindles(index: number) {
    return this.getCapabilities(index).controls['work_spindles'];
  }

  getWorkSpindleRange(index: number, j: number) {
    return this.getWorkSpindles(index).controls[j].controls['range'];
  }

  getTaperedSpindleRange(index: number, j: number) {
    return this.getTaperedSpindles(index).controls[j].controls['range'];
  }

  getStraightSpindleRange(index: number, j: number) {
    return this.getStraightSpindles(index).controls[j].controls['range'];
  }

  getThreadedSpindleRange(index: number, j: number) {
    return this.getThreadedSpindles(index).controls[j].controls['range'];
  }
}
