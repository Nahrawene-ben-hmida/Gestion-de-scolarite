package org.sid.service_etudiant.dao;

import org.sid.service_etudiant.domain.Matiere;
import org.sid.service_etudiant.domain.Section;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface MatiereRepository extends MongoRepository<Matiere,String> {

    @Query(value = "{ 'id' : ?0 }")
    List<Matiere>  findAllBySectionsId(@Param("sectionId")String sectionId);
    //List<Matiere> findAllBySectionsId(@Param("sectionId")String sectionId);

    @Query("Select count(m) from Matiere m")
    long countAllMatieres();
}
