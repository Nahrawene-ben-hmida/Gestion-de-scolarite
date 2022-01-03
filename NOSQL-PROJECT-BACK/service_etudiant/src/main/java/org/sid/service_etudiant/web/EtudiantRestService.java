package org.sid.service_etudiant.web;

import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.RestController;

@RefreshScope
@RestController
public class EtudiantRestService {
   /* @Value("${xParam}")
    private int xParam;
    @Value("${yParam}")
    private int yParam;
    @Value("${me}")
    private String me;
    @GetMapping("/myConfig")
    public Map<String,Object> myConfig() {
        Map<String,Object> params = new HashMap<>();
        params.put("xParam",xParam);
        params.put("yParam",yParam);
        params.put("me",me);
        params.put("threadName",Thread.currentThread().getName());
        return params;
    }*/


}
