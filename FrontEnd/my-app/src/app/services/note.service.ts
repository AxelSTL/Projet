import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../model/note';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = 'http://localhost:8080/note';

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.baseUrl}/get`);
  }

  saveNote(note: Note): Observable<Note> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.baseUrl}/save`, note, {headers: headers});
  }

  updateNote(note:Note){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.baseUrl}/update`, note, {headers: headers});
  }

  deleteNote(note:Note){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.baseUrl}/delete`, note, {headers: headers});
  }
}