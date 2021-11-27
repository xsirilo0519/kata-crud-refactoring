package co.com.sofka.crud.todo;

import co.com.sofka.crud.list.ListModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public TodoDTO save(TodoDTO todoDTO){

        TodoModel todomodel = new TodoModel();
        if(todoDTO.getId() != null){
            todomodel.setId(todoDTO.getId());
        }
        todomodel.setName(todoDTO.getName());
        todomodel.setId_list(todoDTO.getId_list());
        todomodel.setCompleted(todoDTO.isCompleted());
        Long id=repository.save(todomodel).getId();
        todoDTO.setId(id);
        return todoDTO;
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    private TodoModel get(Long id){
         return repository.findById(id).orElseThrow();
    }

}
