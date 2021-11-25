package co.com.sofka.crud.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListService {

    @Autowired
    private ListRepository repository;

    public void hola(){
        
    }

    public Iterable<ListModel> list(){
        return repository.findAll();
    }

    public ListModel save(ListModel todo){
        return repository.save(todo);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public ListModel get(Long id){
         return repository.findById(id).orElseThrow();
    }

}
