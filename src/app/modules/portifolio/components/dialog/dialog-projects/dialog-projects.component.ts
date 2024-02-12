import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IProject } from '../../../interface/IProject.interface';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.css'
})
export class DialogProjectsComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    //Injetando os dados do nosso MatDialog
    @Inject(MAT_DIALOG_DATA) private _data:IProject
  ) {

  }
  ngOnInit(): void {
    //iniciando o valor
    this.getData.set(this._data);
  }

  public getData = signal<IProject | null>(null);

  public closeDialog() {
    return this._dialogRef.close();
  }
}
