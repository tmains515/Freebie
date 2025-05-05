package com.freebie_backend.freebie.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.freebie_backend.freebie.DTOs.LoginRequest;
import com.freebie_backend.freebie.DTOs.UserRegistrationDto;
import com.freebie_backend.freebie.Models.User;
import com.freebie_backend.freebie.Repositories.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServices {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public User RegisterNewUser(UserRegistrationDto userDto){

        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        
        return userRepo.save(user);
        
    }


    public String getUsername(LoginRequest user){
        User foundUser = userRepo.findByEmail(user.getEmail());
        return foundUser.getUsername();
    }
}
