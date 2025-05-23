package com.freebie_backend.freebie.Models;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "listing_categories")
@AllArgsConstructor
@NoArgsConstructor

public class Listing_Categories {
    
    @EmbeddedId
    private ListingCategoryId listingCategoryId;
}
