package com.claudionetto.codigo_certo_fullstack.models.entities;

import com.claudionetto.codigo_certo_fullstack.models.enums.ProjectStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Entity
@Table(name = "project")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String description;

    @Enumerated(EnumType.STRING)
    private ProjectStatus projectStatus;

    @CreationTimestamp
    private Instant createdAt;

    private Instant updateAt;

}
