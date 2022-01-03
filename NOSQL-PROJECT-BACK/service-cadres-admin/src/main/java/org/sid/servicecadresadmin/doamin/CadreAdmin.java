package org.sid.servicecadresadmin.doamin;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Document(collection = "CadreAdmin")
public class CadreAdmin implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    private String id;
    private String nom;
    private String prenom;
    private String adresse;
    private Number telephone;
}
