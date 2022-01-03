package org.sid.service_etudiant.domain;

import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Document(collection = "Class")
public class Class implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    private String nom_class;


    @DBRef
    @Field("ListEtudiants")
    private Set<Etudiant> etudiants;


    @DBRef
    @Field("SectionClass")
    private Section sectionClass;
}
