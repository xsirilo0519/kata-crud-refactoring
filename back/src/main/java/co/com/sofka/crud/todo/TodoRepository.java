package co.com.sofka.crud.todo;

import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<TodoModel, Long> {
}
