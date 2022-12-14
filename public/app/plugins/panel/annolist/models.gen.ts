//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This file is autogenerated. DO NOT EDIT.
//
// To regenerate, run "make gen-cue" from the repository root.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export const PanelModelVersion = Object.freeze([0, 0]);


export interface PanelOptions {
  limit: number;
  navigateAfter: string;
  navigateBefore: string;
  navigateToPanel: boolean;
  onlyFromThisDashboard: boolean;
  onlyInTimeRange: boolean;
  showTags: boolean;
  showTime: boolean;
  showUser: boolean;
  tags: string[];
}

export const defaultPanelOptions: Partial<PanelOptions> = {
  limit: 10,
  navigateAfter: '10m',
  navigateBefore: '10m',
  navigateToPanel: true,
  onlyFromThisDashboard: false,
  onlyInTimeRange: false,
  showTags: true,
  showTime: true,
  showUser: true,
  tags: [],
};
