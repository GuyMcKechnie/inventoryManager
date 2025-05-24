package com.booklidio.booklidio_spring_backend.Users;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Transactional
@Service
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers() {
        try {
            return userRepository.findAll();
        } catch (Exception e) {
            logger.error("Error fetching users", e);
            throw new RuntimeException("Error fetching users", e);
        }
    }

    public Optional<User> getUser(String userId) {
        try {
            return userRepository.findByUserUUID(userId);
        } catch (Exception e) {
            logger.error("Error fetching user with ID: {}", userId, e);
            throw new RuntimeException("Error fetching user with ID: " + userId, e);
        }
    }

    public void addUser(User user) throws Exception {
        try {
            if (userRepository.findByEmail(user.getEmail()).isPresent()) {
                logger.error("User with email: {} already exists", user.getEmail());
                throw new Exception("User with email: " + user.getEmail() + " already exists");
            }
            user.setUserUUID(UUID.randomUUID().toString());
            userRepository.save(user);
        } catch (Exception e) {
            logger.error("Error adding user", e);
            throw new RuntimeException("Error adding user", e);
        }
    }

    public void editUser(String userId, User user) throws Exception {
        try {
            Optional<User> existingUser = userRepository.findByUserUUID(userId);
            if (existingUser.isPresent()) {
                existingUser.get().setFirstName(user.getFirstName());
                existingUser.get().setLastName(user.getLastName());
                existingUser.get().setType(user.getType());
                existingUser.get().setEmail(user.getEmail());
                existingUser.get().setCellphone(user.getCellphone());
                existingUser.get().setAllowsMarketing(user.getAllowsMarketing());
                userRepository.save(existingUser.get());
            } else {
                logger.error("Error editing user with ID: {} - User not found", userId);
                throw new Exception("Edit: User not found");
            }
        } catch (Exception e) {
            logger.error("Error editing user with ID: {}", userId, e);
            throw new RuntimeException("Error editing user with ID: " + userId, e);
        }
    }

    public void duplicateUser(String userId) throws Exception {
        try {
            Optional<User> existingUser = userRepository.findByUserUUID(userId);
            if (existingUser.isPresent()) {
                User user = existingUser.get();
                User duplicatedUser = new User();
                duplicatedUser.setUserUUID(UUID.randomUUID().toString());
                duplicatedUser.setFirstName(user.getFirstName());
                duplicatedUser.setLastName(user.getLastName());
                duplicatedUser.setType(user.getType());
                duplicatedUser.setEmail(user.getEmail().concat(UUID.randomUUID().toString().split("-")[0]));
                duplicatedUser.setCellphone(user.getCellphone());
                duplicatedUser.setAllowsMarketing(user.getAllowsMarketing());
                userRepository.save(duplicatedUser);
            } else {
                logger.error("Error duplicating user with ID: {} - User not found", userId);
                throw new Exception("Duplicate: User not found");
            }
        } catch (Exception e) {
            logger.error("Error duplicating user with ID: {}", userId, e);
            throw new RuntimeException("Error duplicating user with ID: " + userId, e);
        }
    }

    public void deleteUser(String userId) throws Exception {
        try {
            Optional<User> existingUser = userRepository.findByUserUUID(userId);
            if (existingUser.isPresent()) {
                userRepository.delete(existingUser.get());
            } else {
                logger.error("Error deleting user with ID: {} - User not found", userId);
                throw new Exception("Delete: User not found");
            }
        } catch (Exception e) {
            logger.error("Error deleting user with ID: {}", userId, e);
            throw new RuntimeException("Error deleting user with ID: " + userId, e);
        }
    }
}
