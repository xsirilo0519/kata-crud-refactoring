package co.com.sofka.crud.todo;

import co.com.sofka.crud.list.ListModel;

import javax.persistence.*;

@Entity
public class TodoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private boolean completed;
    private String groupListId;


    private Long id_list;

    public Long getId_list() {
        return id_list;
    }
    public String getGroupListId() {
        return groupListId;
    }

    public void setGroupListId(String groupListId) {
        this.groupListId = groupListId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
