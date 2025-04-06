package com.freebie_backend.freebie.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "username")
    private String username;
    
    @Column(name = "user_email", nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String password;
}
