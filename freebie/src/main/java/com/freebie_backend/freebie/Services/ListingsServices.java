package com.freebie_backend.freebie.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.freebie_backend.freebie.Models.Listing;
import com.freebie_backend.freebie.Models.User;
import com.freebie_backend.freebie.Repositories.ListingsRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ListingsServices {
    
    private final ListingsRepo listingsRepo;

    // public List<Listing> getUsersListings(User user){
        
    //     return
    // }
}
