package org.sid.servicecadresadmin.configuration;

import org.sid.servicecadresadmin.doamin.CadreAdmin;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;

@Component
public class ExposeEntityIdRestConfiguration implements RepositoryRestConfigurer {
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
       config.exposeIdsFor(CadreAdmin.class);
 }
}
