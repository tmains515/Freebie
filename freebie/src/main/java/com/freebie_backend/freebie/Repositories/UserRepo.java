package com.freebie_backend.freebie.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freebie_backend.freebie.Models.User;

public interface UserRepo extends JpaRepository <User, String>{
    
}
