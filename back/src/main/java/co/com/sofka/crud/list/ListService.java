package co.com.sofka.crud.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListService {

    @Autowired
    private ListRepository listRepository;

    public Iterable<ListModel> list(){
        return listRepository.findAll();
    }

    public ListModel save(ListModel todo){
        return listRepository.save(todo);
    }

    public void delete(Long id){
        listRepository.delete(get(id));
    }

    public ListModel get(Long id){
         return listRepository.findById(id).orElseThrow();
    }

}
