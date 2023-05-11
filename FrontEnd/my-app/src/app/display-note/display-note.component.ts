import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent {
  note : any;
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.note = history.state;
  }

  backToHome(){
    this.router.navigate(['/accueil'])
  }
}
