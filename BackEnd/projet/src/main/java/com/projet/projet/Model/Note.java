package com.projet.projet.Model;


public class Note {
    
    private String id;
    
    private String title;
    
    private String description;

    private boolean isDone;


    public Note() {}

    public Note(String id, String title, String description, boolean isDone) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public boolean getIsDone(){
        return this.isDone;
    }

    public void setIsDone(boolean isDone){
        this.isDone = isDone;
    }
}
