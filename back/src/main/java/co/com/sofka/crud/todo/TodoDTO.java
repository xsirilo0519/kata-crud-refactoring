package co.com.sofka.crud.todo;

public class TodoDTO {
    private Long id;
    private String name;
    private boolean completed;
    private Long id_list;

    public TodoDTO(Long id, String name, boolean completed, Long id_list) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.id_list = id_list;
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

    public Long getId_list() {
        return id_list;
    }

    public void setId_list(Long id_list) {
        this.id_list = id_list;
    }
}
