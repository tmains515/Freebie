package com.freebie_backend.freebie.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.freebie_backend.freebie.DTOs.LoginRequest;
import com.freebie_backend.freebie.DTOs.UserRegistrationDto;
import com.freebie_backend.freebie.Models.User;
import com.freebie_backend.freebie.Repositories.UserRepo;
import com.freebie_backend.freebie.Security.FreebieUserDetailsService;
import com.freebie_backend.freebie.Services.UserServices;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
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
    
    private final AuthenticationManager authenticationManager;
    private final UserServices userServices;
    

    // TODO: Move all of this to AuthController instead of login

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegistrationDto userDto){
        try {
            userServices.RegisterNewUser(userDto);    
        } catch (Exception e) {
            System.out.println("Something went wrong");
        }
        return ResponseEntity.ok("Success");
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request, HttpServletRequest httpRequest, HttpServletResponse httpResponse) {
        try {
            String username = userServices.getUsername(request);
            Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    username, 
                    request.getPassword()
                )
            );
            
            //Set Security Context
            SecurityContext context = SecurityContextHolder.getContext();
            context.setAuthentication(auth);

            HttpSessionSecurityContextRepository repo = new HttpSessionSecurityContextRepository();
            repo.saveContext(context, httpRequest, httpResponse);

            return ResponseEntity.ok("Login success");
            
        } catch (AuthenticationException e) {

            return ResponseEntity.status(401).body("Login failed");
        }
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Object principal = auth.getPrincipal();

        System.out.println(principal);
        if (principal instanceof UserDetails userDetails) {
            return ResponseEntity.ok("Logged in as: " + userDetails.getUsername());
        }
        return ResponseEntity.ok("Principal: " + principal.toString());
}

    
    
    
}
