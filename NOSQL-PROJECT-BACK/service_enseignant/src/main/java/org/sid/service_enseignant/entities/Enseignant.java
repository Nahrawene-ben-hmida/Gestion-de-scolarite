package org.sid.service_enseignant.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.List;
import java.util.Set;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Document(collection = "Enseignant")
public class Enseignant  implements Serializable {

    private static final long serialVersionUID = 1L;


    @Id
    private String id;
    private String nom;
    private String prenom;
    private String adresse;
    private Number telephone;


    @DBRef
    @Field("enseignantIdClasses")
    private List<EnseignantIdClass> enseignantIdClasses;

    private String idMatiere;
}
