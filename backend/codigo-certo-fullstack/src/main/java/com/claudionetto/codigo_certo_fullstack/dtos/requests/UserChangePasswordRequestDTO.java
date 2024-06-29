package com.claudionetto.codigo_certo_fullstack.dtos.requests;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserChangePasswordRequestDTO (
        @NotBlank
        String currentPassword,
        @NotBlank
        @Size(min = 8)
        String newPassword
){
}
