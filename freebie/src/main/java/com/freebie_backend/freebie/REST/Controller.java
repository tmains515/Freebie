package com.freebie_backend.freebie.REST;

import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.sql.Connection;

@RestController
@RequestMapping("/api/test")
public class Controller {
       @Autowired
    private DataSource dataSource;
    
    @GetMapping("/db")
    public String testConnection() {
        try (Connection conn = dataSource.getConnection()) {
            return "Connection successful!";
        } catch (SQLException e) {
            return "Connection failed: " + e.getMessage();
        }
    }
}
