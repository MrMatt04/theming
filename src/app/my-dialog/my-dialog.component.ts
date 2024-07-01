import { Component, inject, model } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.scss',
})
export class MyDialogComponent {
  readonly dialogRef = inject(MatDialogRef<MyDialogComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
