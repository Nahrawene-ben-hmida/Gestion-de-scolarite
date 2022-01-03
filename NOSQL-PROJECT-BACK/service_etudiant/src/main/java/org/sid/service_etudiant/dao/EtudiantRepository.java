package org.sid.service_etudiant.dao;

import org.sid.service_etudiant.domain.Etudiant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface EtudiantRepository extends MongoRepository<Etudiant,String> {

    long countEtudiantsBySessionEtudiantId(@Param("idSession")String id);
    long countEtudiantsByClassEtudiantIdAndSessionEtudiantId(@Param("classId")String classId,@Param("sessionId")String sessionId);
    long countEtudiantsByResultatAndSessionEtudiantIdAndClassEtudiantId(@Param("resultat")String resultat,@Param("sessionId")String sessionId,@Param("classId")String classId);
    long countEtudiantsByResultatAndSessionEtudiantId(@Param("resultat")String resultat,@Param("sessionId")String sessionId);

    @Query("Select count(e) from Etudiant e")
    long countAllEtudiants();
    List<Etudiant> findBySessionEtudiantIdAndClassEtudiantId(@Param("sessionId")String sessionId,@Param("classId")String classId);
    List<Etudiant> findBySessionEtudiantId(@Param("sessionId")String sessionId);

}
