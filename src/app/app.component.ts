import { Component, inject, model, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'theming';

  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      panelClass: 'my-dialog',
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
