package com.freebie_backend.freebie.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freebie_backend.freebie.Models.User;
import java.util.List;
import java.util.Optional;


public interface UserRepo extends JpaRepository <User, Integer>{
    public User findByEmail(String email);
    Optional<User> findByUsername(String username);
}
