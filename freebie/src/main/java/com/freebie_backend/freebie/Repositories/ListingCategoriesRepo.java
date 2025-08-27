package com.freebie_backend.freebie.Repositories;

import com.freebie_backend.freebie.Models.Listing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

import java.util.List;

interface ListingCategoriesRepo extends JpaRepository<Listing, Integer> {
    public List<Listing> findByListingId(Integer listingId);
}

public addLRA (LRAdto){
    LRA newLra = fromDto(LRAdto)
            AdminInfo admin
             if( adminrepo.existsByName(newLra) & adminrepo.existsByPhone(newLra) ){
                 adminRep.findbyNameAndPhone(newLra.getName, newLra.getPhone)
             }
}