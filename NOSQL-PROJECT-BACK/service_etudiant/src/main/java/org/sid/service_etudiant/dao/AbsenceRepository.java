package org.sid.service_etudiant.dao;

import org.sid.service_etudiant.domain.Absence;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


@RepositoryRestResource
public interface AbsenceRepository  extends MongoRepository<Absence,String> {
    List<Absence> findByDateAbsence(@Param("dateAbsence")String dateAbsence);
    List<Absence> findByEtudiantAbsenceId(@Param("etudiant")String etudiantAbsence);
    List<Absence> findByDateAbsenceAndEtudiantAbsenceIdAndMatiereAbsenceId(@Param("dateAbsence")String dateAbsence,@Param("etudiantAbsence")String etudiantAbsenceId,@Param("matiereAbsence") String matiereAbsenceId);
    long countAbsencesByMatiereAbsenceIdAndEtudiantAbsenceId(@Param("matiereId")String matiereId,@Param("etudiantId")String etudiantId);
    long countAbsencesByEtatAndMatiereAbsenceIdAndEtudiantAbsenceId(@Param("etat")String etat,@Param("matiereId")String matiereId,@Param("etudiantId")String etudiantId);
    long countAbsencesByEtatAndEtudiantAbsenceId(@Param("etat")String etat,@Param("etudiantId")String etudiantId);
    List<Absence> findAllByEtudiantAbsenceId(@Param("etudiantId")String etudiantId);

}
