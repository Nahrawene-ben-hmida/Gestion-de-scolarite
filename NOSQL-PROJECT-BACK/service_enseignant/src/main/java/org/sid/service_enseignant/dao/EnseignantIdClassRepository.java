package org.sid.service_enseignant.dao;

import org.sid.service_enseignant.entities.EnseignantIdClass;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface EnseignantIdClassRepository  extends MongoRepository<EnseignantIdClass,String> {
}
