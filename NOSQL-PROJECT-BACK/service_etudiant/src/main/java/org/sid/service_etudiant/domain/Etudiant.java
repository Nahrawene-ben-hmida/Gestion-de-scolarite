package org.sid.service_etudiant.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "Etudiant")
public class Etudiant implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    private String nom;
    private String prenom;
    private String adresse;
    private Number telephone;
    private String resultat;

    @DBRef
    @Field("sessionEtudiant")
    private Session sessionEtudiant;

    @DBRef
    @Field("classEtudiant")
    private Class classEtudiant;

    @DBRef
    @Field("Absences")
    private Set<Absence> absences;
}
