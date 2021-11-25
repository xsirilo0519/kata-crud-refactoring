package co.com.sofka.crud.list;

import co.com.sofka.crud.todo.TodoModel;

import javax.persistence.*;
import java.util.List;

@Entity
public class ListModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "id_list")
    private List<TodoModel> todoModel;

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

    public List<TodoModel> getTodoModel() {
        return todoModel;
    }

    public void setTodoModel(List<TodoModel> todoModel) {
        this.todoModel = todoModel;
    }
}
