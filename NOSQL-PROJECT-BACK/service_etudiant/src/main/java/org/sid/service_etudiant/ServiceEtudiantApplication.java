package org.sid.service_etudiant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ServiceEtudiantApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceEtudiantApplication.class, args);
    }

}
