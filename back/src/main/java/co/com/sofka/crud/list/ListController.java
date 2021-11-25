package co.com.sofka.crud.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ListController {

    @Autowired
    private ListService service;

    @GetMapping(value = "api/todos")
    public Iterable<ListModel> list(){
        return service.list();
    }
    
    @PostMapping(value = "api/todo")
    public ListModel save(@RequestBody ListModel todo){
        return service.save(todo);
    }

    @PutMapping(value = "api/todo")
    public ListModel update(@RequestBody ListModel todo){
        if(todo.getId() != null){
            return service.save(todo);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public ListModel get(@PathVariable("id") Long id){
        return service.get(id);
    }

}
