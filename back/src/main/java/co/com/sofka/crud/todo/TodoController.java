package co.com.sofka.crud.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("todo")
public class TodoController {

    @Autowired
    private TodoService service;

    @PostMapping(value = "/todo")
    public TodoDTO save(@RequestBody TodoDTO todoDTO){
        return service.save(todoDTO);
    }

    @PutMapping(value = "/todo")
    public TodoDTO update(@RequestBody TodoDTO todoDTO){
        if(todoDTO.getId() != null){
            return service.save(todoDTO);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }


}
