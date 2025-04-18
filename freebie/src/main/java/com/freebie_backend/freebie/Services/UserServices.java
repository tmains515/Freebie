package com.freebie_backend.freebie.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.freebie_backend.freebie.DTOs.UserRegistrationDto;
import com.freebie_backend.freebie.Models.User;
import com.freebie_backend.freebie.Repositories.UserRepo;

@Service
public class UserServices {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User RegisterNewUser(UserRegistrationDto userDto){

        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        
        return userRepo.save(user);
        
    }


    public String getUsername(User user){
        User foundUser = userRepo.findByEmail(user.getEmail());
        return foundUser.getUsername();
    }
}
