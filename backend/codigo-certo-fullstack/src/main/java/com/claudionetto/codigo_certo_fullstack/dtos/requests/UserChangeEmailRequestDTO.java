package com.claudionetto.codigo_certo_fullstack.dtos.requests;

import jakarta.validation.constraints.NotBlank;

public record UserChangeEmailRequestDTO (
        @NotBlank
        String email
){
}
