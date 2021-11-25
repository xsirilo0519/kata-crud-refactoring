package co.com.sofka.crud.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("list")
public class ListController {

    @Autowired
    private ListService listservice;

    @GetMapping(value = "/lista")
    public Iterable<ListModel> list(){
        return listservice.list();
    }
    
    @PostMapping(value = "/todo")
    public ListModel save(@RequestBody ListModel todo){
        return listservice.save(todo);
    }

    @PutMapping(value = "/todo")
    public ListModel update(@RequestBody ListModel todo){
        if(todo.getId() != null){
            return listservice.save(todo);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        listservice.delete(id);
    }

    @GetMapping(value = "/{id}/todo")
    public ListModel get(@PathVariable("id") Long id){
        return listservice.get(id);
    }

}
