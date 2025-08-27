package com.freebie_backend.freebie.Models;


import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Table(name = "current_listings")
@Data
public class Listing {

    @Id
    @Column(name = "listing_id")
    private int listingId;

    @Column(name = "title")
    private String title;

    @Column(name = "category_id")
    private int category_id;

    @Column(name = "location")
    private String location;

    @Column(name = "details")
    private String details;

    // User 'Selling' the item
    @OneToOne
    @JoinColumn(name = "user_id")
    private User userId;


    
}
