//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This file is autogenerated. DO NOT EDIT.
//
// To regenerate, run "make gen-cue" from the repository root.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import * as ui from '@grafana/schema';

export const PanelModelVersion = Object.freeze([0, 0]);


export interface PanelOptions extends ui.SingleStatBaseOptions {
  colorMode: ui.BigValueColorMode;
  graphMode: ui.BigValueGraphMode;
  justifyMode: ui.BigValueJustifyMode;
  textMode: ui.BigValueTextMode;
}

export const defaultPanelOptions: Partial<PanelOptions> = {
  colorMode: ui.BigValueColorMode.Value,
  graphMode: ui.BigValueGraphMode.Area,
  justifyMode: ui.BigValueJustifyMode.Auto,
  textMode: ui.BigValueTextMode.Auto,
};
