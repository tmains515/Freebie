package com.freebie_backend.freebie.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freebie_backend.freebie.Models.User;
import java.util.List;


public interface UserRepo extends JpaRepository <User, String>{
    public User findByUsername(String username);
    public User findByEmail(String email);
}
