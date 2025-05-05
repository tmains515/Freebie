package com.freebie_backend.freebie.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freebie_backend.freebie.Services.ListingsServices;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class ListingsController {
    
    private final ListingsServices listingsServices;


    @GetMapping("/currentListings/{id}")
    public String getMethodName(@PathVariable Integer id) {
        return new String();
    }
    
    @GetMapping("/test")
    public ResponseEntity<String> test() {
        // System.out.println("fart");
        // Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        // Object principal = auth.getPrincipal();

        // if (principal instanceof UserDetails userDetails) {
        //     System.out.println(userDetails.getUsername());
        //     return ResponseEntity.ok("Logged in as: " + userDetails.getUsername());
        // }
        // return ResponseEntity.ok("Principal: " + principal.toString());
        return ResponseEntity.ok("This one worksS");
    }
    
}
