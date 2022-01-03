package org.sid.service_etudiant.domain;

import jdk.Exported;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.rest.core.annotation.RestResource;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "Matiere")
public class Matiere  implements Serializable {

    private static final long serialVersionUID = 1L;


    @Id
    private String id;
    private String matiere;

    @DBRef
    @Field("matiereAbsence")
    private Set<Absence> absences;

    @DBRef
    @Field("matiereSection")
    private List<Section> sections;
}
