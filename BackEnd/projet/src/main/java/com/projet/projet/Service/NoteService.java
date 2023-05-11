package com.projet.projet.Service;

import java.io.File;
import java.io.IOException;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.projet.projet.Model.Note;
@Service
public class NoteService {


    public List<Note> getAllNotes() {
        ObjectMapper objectMapper = new ObjectMapper();
        File file = new File("listnote.json");
        List<Note> notes =new ArrayList<>();
        if (file.exists()) {
            try {
                notes = objectMapper.readValue(file, new TypeReference<List<Note>>() {});
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            notes = new ArrayList<>();
        }
        return notes;
    }


    public List<Note> save(Note note){
        ObjectMapper objectMapper = new ObjectMapper();
        File file = new File("listnote.json");
        List<Note> notes =new ArrayList<>();
        if (file.exists()) {
            try {
                notes = objectMapper.readValue(file, new TypeReference<List<Note>>() {});
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            notes = new ArrayList<>();
        }
        notes.add(0,note);
        try {
            objectMapper.writeValue(file, notes);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return notes;
    }

    
    public List<Note> update(Note note) throws StreamReadException, DatabindException, IOException{
        ObjectMapper objectMapper = new ObjectMapper();
        File file = new File("listnote.json");
        List<Note> notes;
        if (file.exists()) {
            notes = objectMapper.readValue(file, new TypeReference<List<Note>>() {});
        } else {
            notes = new ArrayList<>();
        }
        for(int i =0; i < notes.size(); i++){
            if(notes.get(i).getId().equals(note.getId())){
                if(note.getIsDone()){
                    notes.remove(i);
                    notes.add(note);
                } else {
                    notes.remove(i);
                    notes.add(0,note);
                }
            }
        }
        objectMapper.writeValue(file, notes);
        return notes;
    }


    public List<Note> delete(Note note) throws StreamReadException, DatabindException, IOException{
        ObjectMapper objectMapper = new ObjectMapper();
        File file = new File("listnote.json");
        List<Note> notes;
        if (file.exists()) {
            notes = objectMapper.readValue(file, new TypeReference<List<Note>>() {});
        } else {
            notes = new ArrayList<>();
        }
        for(int i =0; i < notes.size(); i++){
            if(notes.get(i).getId().equals(note.getId())){
                    notes.remove(i);
            }
        }
        objectMapper.writeValue(file, notes);
        return notes;
    }
}