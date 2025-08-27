package com.freebie_backend.freebie.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freebie_backend.freebie.DTOs.ListingDto;
import com.freebie_backend.freebie.Models.User;
import com.freebie_backend.freebie.Repositories.UserRepo;
import com.freebie_backend.freebie.Services.ListingsServices;

import lombok.RequiredArgsConstructor;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/user_listings")
@RequiredArgsConstructor
public class ListingsController {
    
    private final ListingsServices listingsServices;
    private final UserRepo userRepo;

    @GetMapping("/currentListings")
    public ResponseEntity <List<ListingDto>> getCurrentUserListings() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
       // Object principal = auth.getPrincipal();
        String username = auth.getName();
        Optional<User> user = userRepo.findByUsername(username);

        if (user.isEmpty()){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.emptyList());
        }
            List<ListingDto> listings = listingsServices.getUsersListings(user.get());
            return ResponseEntity.ok(listings);
    }
    
    @GetMapping("/test")
    public ResponseEntity<String> test() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Object principal = auth.getPrincipal();

        if (principal instanceof UserDetails userDetails) {

            return ResponseEntity.ok("Logged in as: " + userDetails.getUsername());
        }
        return ResponseEntity.ok("Principal: " + principal.toString());
    }
    
}
