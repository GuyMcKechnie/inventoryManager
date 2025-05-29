package com.booklidio.booklidio_spring_backend.Images;

import java.sql.Blob;
import java.sql.SQLException;

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

    @Transient // This field will not be persisted in the database
    private byte[] imageDataBytes;

    public byte[] getImageDataBytes() {
        if (data != null) {
            try {
                return data.getBytes(1, (int) data.length());
            } catch (SQLException e) {
                // Handle the exception appropriately
                e.printStackTrace();
                return null;
            }
        }
        return null;
    }

    public void setImageDataBytes(byte[] imageDataBytes) {
        this.imageDataBytes = imageDataBytes;
    }
}
