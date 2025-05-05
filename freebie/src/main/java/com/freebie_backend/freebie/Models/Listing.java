package com.freebie_backend.freebie.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import jakarta.persistence.OneToOne;

@Entity
@Table(name = "currentListings")
public class Listing {

    @Id
    @Column(name = "listingId")
    private int listingId;

    @Column(name = "title")
    private String title;

    @Column(name = "categories")
    private String[] categories;

    @Column(name = "location")
    private String location;

    @Column(name = "details")
    private String details;

    // User 'Selling' the item
    @OneToOne
    @JoinColumn(name = "user_id")
    private User userId;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String[] getCategories() {
        return categories;
    }

    public void setCategories(String[] categories) {
        this.categories = categories;
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
