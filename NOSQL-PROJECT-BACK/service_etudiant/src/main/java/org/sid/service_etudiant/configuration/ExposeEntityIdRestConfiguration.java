package org.sid.service_etudiant.configuration;

import org.sid.service_etudiant.domain.*;
import org.sid.service_etudiant.domain.Class;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;

@Component
public class ExposeEntityIdRestConfiguration implements RepositoryRestConfigurer {

    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Matiere.class);
        config.exposeIdsFor(Section.class);
     config.exposeIdsFor(Class.class);
     config.exposeIdsFor(Etudiant.class);
     config.exposeIdsFor(Absence.class);

     config.exposeIdsFor(Session.class);



 }
}
