package co.com.sofka.crud.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("list")
public class ListController {

    @Autowired
    private ListService listservice;

    @GetMapping(value = "/lista")
    public List<ListDTO> list(){
        return listservice.list();
    }
    @PostMapping(value = "/lista")
    public ListDTO save(@RequestBody ListDTO todo){
        return listservice.save(todo);
    }
    @DeleteMapping(value = "/{id}/lista")
    public void delete(@PathVariable("id")Long id){
        listservice.delete(id);
    }


}
