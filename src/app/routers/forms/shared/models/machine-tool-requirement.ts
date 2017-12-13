export class MachineToolRequirement {
  id?: number;
  description: string;
  number_of_tools_in_tool_magazine?: number = 1;
  automatically_pallet_changeable: boolean = false;
}
