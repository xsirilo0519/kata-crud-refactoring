package co.com.sofka.crud.list;

import co.com.sofka.crud.todo.TodoDTO;
import co.com.sofka.crud.todo.TodoModel;

import java.util.List;

public class ListDTO {
    private Long id;
    private String name;
    private List<TodoDTO> TodoDTO;

    public ListDTO(Long id, String name, List<TodoDTO> TodoDTO) {
        this.id = id;
        this.name = name;
        this.TodoDTO = TodoDTO;
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

    public List<TodoDTO> getTodoModel() {
        return TodoDTO;
    }

    public void setTodoModel(List<TodoDTO> TodoDTO) {
        this.TodoDTO = TodoDTO;
    }
}
