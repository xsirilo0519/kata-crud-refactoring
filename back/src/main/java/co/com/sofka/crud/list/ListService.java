package co.com.sofka.crud.list;

import co.com.sofka.crud.todo.TodoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class ListService {

    @Autowired
    private ListRepository listRepository;

    public List<ListDTO> list(){
                List<ListDTO> listTodo= new ArrayList<ListDTO>();
                listRepository.findAll()
                .forEach(x->{
                    List<TodoDTO> listTodo3=x.getTodoModel().stream().map(Y->new TodoDTO(Y.getId(),Y.getName(), Y.isCompleted(), Y.getId_list())).collect(Collectors.toList());
                    listTodo.add(new ListDTO(x.getId(),x.getName(),listTodo3));
                });
          return listTodo;
    }

    public ListDTO save(ListDTO todo){
        ListModel listModel = new ListModel();
        listModel.setName(todo.getName());
        Long id=listRepository.save(listModel).getId();
        todo.setId(id);
        return todo;
    }

    public void delete(Long id){
        listRepository.delete(get(id));
    }

    public ListModel get(Long id){
         return listRepository.findById(id).orElseThrow();
    }

}
