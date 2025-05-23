package com.freebie_backend.freebie.Models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Embeddable
@EqualsAndHashCode
@Getter
@Setter
public class ListingCategoryId implements Serializable{
    
    @Column(name = "listing_id")
    private Integer listing_id;

    @Column(name = "category_id")
    private Integer category_id;

}
