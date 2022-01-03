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
@Document(collection = "Section")
public class Section  implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    private String section;

    @DBRef
    @Field("matiereSection")
    private Set<Matiere> matiereSection;

    @DBRef
    @Field("sectionClass")
    private Set<Class> classes;
}
