import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Note } from '../model/note';
import { v4 as uuidv4 } from 'uuid'

@Component({
  selector: 'app-new-form-dialog-box',
  templateUrl: './new-form-dialog-box.component.html',
  styleUrls: ['./new-form-dialog-box.component.scss']
})
export class NewFormDialogBoxComponent implements OnInit {
  noteForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<NewFormDialogBoxComponent>) { }

  ngOnInit(): void { }

  save() {
    const note = {
      id: uuidv4(),
      title: this.noteForm.get('title')?.value ?? '',
      description: this.noteForm.get('description')?.value ?? '',
      isDone: false
    };
    this.dialogRef.close(note);
  }

  cancel() {
    this.dialogRef.close();
  }
}

