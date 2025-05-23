package com.freebie_backend.freebie.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.freebie_backend.freebie.DTOs.ListingDto;
import com.freebie_backend.freebie.Mappers.ListingMapper;
import com.freebie_backend.freebie.Models.Listing;
import com.freebie_backend.freebie.Models.User;
import com.freebie_backend.freebie.Repositories.ListingsRepo;
import com.freebie_backend.freebie.Repositories.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ListingsServices {
    
    private final ListingsRepo listingsRepo;
    public List<ListingDto> getUsersListings(User user){

        // Find all user listings and make new list for transfering to DTO
        List<Listing> listings = listingsRepo.findByUserId(user);
        List<ListingDto> listingsDto = new ArrayList<ListingDto>();
        System.out.println("<><><><>HERE" + listings);

        if(listings.isEmpty()){
            return null;
        }

        // Place each listing into a DTO
        for (Listing listing : listings) {
            listingsDto.add(ListingMapper.toDto(listing));
        }

        return listingsDto;
    }
}
