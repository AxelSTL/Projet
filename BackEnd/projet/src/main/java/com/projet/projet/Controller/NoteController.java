package com.projet.projet.Controller;

import java.io.IOException;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.projet.projet.Model.Note;
import com.projet.projet.Service.NoteService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/note")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping("/get")
    public List<Note> getAllNotes() throws StreamReadException, DatabindException, IOException {
       return noteService.getAllNotes();
    }


    @PostMapping("/save")
    public List<Note> saveNote(@RequestBody Note note) throws StreamReadException, DatabindException, IOException {
        return noteService.save(note);
    }

    @PostMapping("/update")
    public List<Note> updateNote(@RequestBody Note note) throws StreamReadException, DatabindException, IOException {
        return noteService.update(note);
    }

    @PostMapping("/delete")
    public List<Note> deleteNote(@RequestBody Note note) throws StreamReadException, DatabindException, IOException {
        return noteService.delete(note);
    }
}
