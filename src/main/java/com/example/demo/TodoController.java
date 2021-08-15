package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RequestMapping("/api")
@RestController
public class TodoController {

    private static List<TODO> todoList = new ArrayList<>();

    @GetMapping("/list")
    public Object getTodoList() {
        return todoList;
    }

    @PostMapping("/add")
    public Object add(@RequestParam("todo") String todo) {
        int id = (int) (Math.random() * 1000);
        todoList.add(new TODO(id, todo));
        return todoList;
    }

    @PutMapping("/toggle/{id}")
    public Object complete(@PathVariable("id") Integer id) {
        todoList.stream().filter(it -> it.getId() == id).findFirst().ifPresent(m -> {
            m.setComplete(!m.isComplete());
        });
        return todoList;
    }

    @RequestMapping(path="/delete/{id}", method = RequestMethod.DELETE)
    public Object delete(@PathVariable("id") Integer id) {
        todoList.removeIf(it->it.getId()==id);
        return todoList;
    }

}

@Data
@RequiredArgsConstructor
class TODO {
    private final int id;
    private final String item;
    private boolean complete;
}