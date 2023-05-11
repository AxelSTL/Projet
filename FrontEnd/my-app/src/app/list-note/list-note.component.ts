import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../model/note';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NewFormDialogBoxComponent } from '../new-form-dialog-box/new-form-dialog-box.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss']
})
export class ListNoteComponent {
  testNote: Note = new Note();
  dataSource: MatTableDataSource<Note> = new MatTableDataSource();
  notes: any;
  isDialogOpen: boolean = false;
  columns: string[] = ['title', 'isDone', 'makeItDone', 'delete']


  constructor(
    private noteSerice: NoteService,
    public dialog: MatDialog,
    private router: Router
  ){}

  ngOnInit(): void {
    this.noteSerice.getAllNotes().subscribe(data => {
      this.notes = data;
      this.dataSource = this.notes;

    });
  }
  
  ngAfterViewInit(): void {
   
  }

seeNote(note : Note){
  this.router.navigate(['/note'],{state : note});
}

  makeNoteDone(event : any, note: any){
    note.isDone = event;
    this.noteSerice.updateNote(note).subscribe(data => {
      this.notes = data;
      this.dataSource = this.notes;

    });
  }

  createNote(){
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(NewFormDialogBoxComponent,{
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(dialogData =>{
      console.log(dialogData)
      if(dialogData){
        let noteToSave = new Note();
        noteToSave.id = dialogData.id;
        noteToSave.title = dialogData.title;
        noteToSave.description = dialogData.description;
        noteToSave.done = false;
        this.noteSerice.saveNote(noteToSave).subscribe(data => {
          this.notes = data;
         })
      } 
      this.isDialogOpen = false
    })
  }

  deleteNote(note : Note){
    this.noteSerice.deleteNote(note).subscribe(data => {
      this.notes = data;
      this.dataSource = this.notes;
    });
  }
}
