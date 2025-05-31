package com.booklidio.booklidio_spring_backend.Images;

import java.sql.Blob;
import java.sql.SQLException;

import com.booklidio.booklidio_spring_backend.Analytics.ReportController;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "images")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Image {
    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;
    private String imageUUID;
    private Long bookId;
    @JsonIgnore
    private Blob data;
    @Transient
    private byte[] imageDataBytes;

    private static final org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(Image.class);

    public byte[] getImageDataBytes() {
        if (data != null) {
            try {
                return data.getBytes(1, (int) data.length());
            } catch (SQLException e) {
                logger.error("SQL Exception getting imageDataBytes: s", e);
                return null;
            }
        }
        return null;
    }

    public void setImageDataBytes(byte[] imageDataBytes) {
        this.imageDataBytes = imageDataBytes;
    }
}
