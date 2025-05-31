package com.booklidio.booklidio_spring_backend.Images;

import java.sql.Blob;
import java.sql.SQLException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class ImageService {
    private static final org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(ImageService.class);

    @Autowired
    private ImageRepository imageRepository;

    public Optional<Image> getImage(Long bookId) {
        try {
            Optional<Image> imageOptional = imageRepository.findByBookId(bookId);
            if (imageOptional.isPresent()) {
                Image image = imageOptional.get();
                // Explicitly access imageData to ensure it's loaded
                Blob imageBlob = image.getData();
                if (imageBlob != null) {
                    logger.info("Image data size: " + imageBlob.length() + " bytes");
                    byte[] imageDataBytes = imageBlob.getBytes(1, (int) imageBlob.length());
                    image.setImageDataBytes(imageDataBytes);
                } else {
                    logger.warn("Image data is null for bookId: " + bookId);
                }
                return imageOptional;

            } else {
                logger.info("Image with bookId {} not found.", bookId);
                return Optional.empty();
            }

        } catch (SQLException e) {
            logger.error("SQL Error fetching image with bookId: {}", bookId, e);
            throw new RuntimeException("SQL Error fetching image with bookId: " + bookId, e);
        } catch (Exception e) {
            logger.error("Unexpected Error fetching image with bookId: {}", bookId, e);
            throw new RuntimeException("Unexpected Error fetching image with bookId: " + bookId, e);
        }
    }
}