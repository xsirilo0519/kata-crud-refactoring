package co.com.sofka.crud.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;

    public Iterable<TodoModel> list(){
        return repository.findAll();
    }

    public TodoModel save(TodoModel todoModel){
        return repository.save(todoModel);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public TodoModel get(Long id){
         return repository.findById(id).orElseThrow();
    }

}
