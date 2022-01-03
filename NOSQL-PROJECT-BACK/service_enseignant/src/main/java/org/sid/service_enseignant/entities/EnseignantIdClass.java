package org.sid.service_enseignant.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Document(collection = "EnseignantIdClass")
public class EnseignantIdClass  implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    private String nom_class;

    @DBRef
    @Field("enseignantIdClasses")
    private List<Enseignant> enseignants;
}
