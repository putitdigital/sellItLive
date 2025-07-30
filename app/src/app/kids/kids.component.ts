import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';
import {
  Diagram, NodeModel, UndoRedo, ConnectorModel, PointPortModel, Connector, FlowShapeModel,
  SymbolInfo, IDragEnterEventArgs, SnapSettingsModel, MarginModel, TextStyleModel, StrokeStyleModel,
  OrthogonalSegmentModel, Node, PaletteModel
} from '@syncfusion/ej2-diagrams';
import { ExpandMode } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class KidsComponent { 
    public terminator: FlowShapeModel = { type: 'Flow', shape: 'Terminator' };
    public decision: FlowShapeModel = { type: 'Flow', shape: 'Decision' };
}
