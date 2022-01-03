package org.sid.service_enseignant.configuration;

import org.sid.service_enseignant.entities.Enseignant;
import org.sid.service_enseignant.entities.EnseignantIdClass;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;

@Component
public class ExposeEntityIdRestConfiguration implements RepositoryRestConfigurer {

    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
       config.exposeIdsFor(Enseignant.class);
       config.exposeIdsFor(EnseignantIdClass.class);
 }
}
