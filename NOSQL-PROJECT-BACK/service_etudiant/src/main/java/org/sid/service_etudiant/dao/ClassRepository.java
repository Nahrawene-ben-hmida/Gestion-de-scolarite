package org.sid.service_etudiant.dao;

import org.sid.service_etudiant.domain.Class;
import org.sid.service_etudiant.domain.Section;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ClassRepository extends MongoRepository<Class,String> {

    long countClassesBySectionClassId(@Param("sectionId")String sectionId);

    @Query("Select count(c) from Class c")
    long countAllClasses();

    @Query("{'id' : ?0 }")
    List<Class> findClassBySession(@Param("idSession")String idSession);
    long countDistinctBySectionClass(Section sectionClass);
}
