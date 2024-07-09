package com.claudionetto.codigo_certo_fullstack.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @GetMapping
    public ResponseEntity<String> hello(){
        return ResponseEntity.ok("Hello, Api is on");
    }

}
