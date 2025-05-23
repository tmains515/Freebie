package com.freebie_backend.freebie.Mappers;

import com.freebie_backend.freebie.DTOs.ListingDto;
import com.freebie_backend.freebie.Models.Listing;

public class ListingMapper {
    
    // Map to DTO
    public static ListingDto toDto(Listing item){
        ListingDto listingDto = new ListingDto();
        listingDto.setListingId(item.getListingId());
        listingDto.setTitle(item.getTitle());
        listingDto.setDetails(item.getDetails());
        listingDto.setLocation(item.getLocation());
        listingDto.setCategory_id(item.getCategory_id());
        
        return listingDto;
    }

    // Map to Entity
    public static Listing toEntity(ListingDto item){
        Listing listing = new Listing();
        listing.setListingId(item.getListingId());
        listing.setTitle(item.getTitle());
        listing.setDetails(item.getDetails());
        listing.setLocation(item.getLocation());
        listing.setCategory_id(item.getCategory_id());

        return listing;
    }
    
}
