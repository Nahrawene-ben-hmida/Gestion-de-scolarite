package org.sid.servicecadresadmin.dao;

import org.sid.servicecadresadmin.doamin.CadreAdmin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CadreAdminRepository extends MongoRepository<CadreAdmin,String> {
    @Query("select count(c) from CadreAdmin c")
    long countAllCadreAdmins();

}
