package com.example.duybaocicd;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping
    public String getUser(){
        return "duy bao";
    }

    @PostMapping
    public String getString(@RequestBody String s){
        return s;
    }
}
