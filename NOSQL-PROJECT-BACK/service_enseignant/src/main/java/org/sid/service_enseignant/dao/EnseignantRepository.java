package org.sid.service_enseignant.dao;

import org.sid.service_enseignant.entities.Enseignant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EnseignantRepository extends MongoRepository<Enseignant,String> {

    long countEnseignantsById(String id);
}
