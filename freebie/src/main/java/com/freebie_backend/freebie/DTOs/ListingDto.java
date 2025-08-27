package com.freebie_backend.freebie.DTOs;


public class ListingDto {
    private int listingId;
    
    private String title;
    private Integer category_id;
    private String location;
    private String details;


    // Map for categories

    
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
    public Integer getCategory_id() {
        return category_id;
    }
    public void setCategory_id(Integer category_id) {
        this.category_id = category_id;
    }


    @Override
    public String toString() {
        return "ListingDto{" +
                "listingId=" + listingId +
                ", title='" + title + '\'' +
                ", category_id=" + category_id +
                ", location='" + location + '\'' +
                ", details='" + details + '\'' +
                '}';
    }
}
