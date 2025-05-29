package com.booklidio.booklidio_spring_backend.Images;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/images")
@CrossOrigin(origins = "http://localhost:5173", methods = {
        RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE,
        RequestMethod.OPTIONS }, allowedHeaders = "*", maxAge = 3600)
public class ImageController {

    private final ImageService imageService;
    private static final Logger logger = LoggerFactory.getLogger(ImageController.class);

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping("/getImage/{bookId}")
    public ResponseEntity<Optional<Image>> getImage(@PathVariable("bookId") Long bookId) {
        try {
            return new ResponseEntity<>(imageService.getImage(bookId), HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error getting image with bookId: {}", bookId, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
