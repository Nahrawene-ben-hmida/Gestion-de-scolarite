package org.sid.service_etudiant.dao;

import org.sid.service_etudiant.domain.Matiere;
import org.sid.service_etudiant.domain.Section;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface SectionRepository  extends MongoRepository<Section,String> {

    @Query("Select count(s) from Section s")
    long countAll();
}
