package com.freebie_backend.freebie.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freebie_backend.freebie.Models.Listing;
import com.freebie_backend.freebie.Models.User;

import java.util.List;


public interface ListingsRepo extends JpaRepository<Listing, Integer>{
    public List<Listing> findByUserId(User user);
}
