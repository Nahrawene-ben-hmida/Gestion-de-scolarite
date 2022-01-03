package org.sid.service_etudiant.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Document(collection = "Absence")
public class Absence implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    private String dateAbsence;
    private String etat;

    @DBRef
    @Field("etudiantAbsence")
    private Etudiant etudiantAbsence;


    @DBRef
    @Field("matiereAbsence")
    private Matiere matiereAbsence;
}
