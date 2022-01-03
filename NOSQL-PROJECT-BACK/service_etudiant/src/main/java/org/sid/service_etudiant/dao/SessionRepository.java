package org.sid.service_etudiant.dao;

import org.sid.service_etudiant.domain.Session;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface SessionRepository  extends MongoRepository<Session,String> {
}
