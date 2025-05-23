package com.freebie_backend.freebie.Models;


import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import jakarta.persistence.OneToOne;

@Entity
@Table(name = "current_listings")
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

    public int getListingId() {
        return listingId;
    }

    public void setListingId(int listingId) {
        this.listingId = listingId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public User getUserId() {
        return this.userId;
    }

    public void setUser(User userId) {
        this.userId = userId;
    }

    
}
