package com.freebie_backend.freebie.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.freebie_backend.freebie.DTOs.UserRegistrationDto;
import com.freebie_backend.freebie.Models.User;
import com.freebie_backend.freebie.Repositories.UserRepo;
import com.freebie_backend.freebie.Security.FreebieUserDetailsService;
import com.freebie_backend.freebie.Services.UserServices;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/user")
public class UserController {
    
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final FreebieUserDetailsService freebieUserDetailsService;
    private final UserServices userServices;


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegistrationDto userDto){
        System.out.println("<><><><><><><><>>");
        try {
            userServices.RegisterNewUser(userDto);    
        } catch (Exception e) {
            System.out.println("Something went wrong <>><><<>");
        }
        return ResponseEntity.ok("Success");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try{
            Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(auth);

        }
        catch(Exception e){

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");

        }
        return ResponseEntity.ok("Login Successful");
    }
    
    
    
}
