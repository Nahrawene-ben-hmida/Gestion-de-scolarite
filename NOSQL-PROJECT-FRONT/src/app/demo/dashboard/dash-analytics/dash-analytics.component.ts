import { Component, OnInit } from '@angular/core';
import { ChartDB } from '../../../fack-db/chart-data';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import {SessionService} from "../../services/session.service";
import {EtudiantService} from "../../services/etudiant.service";
import {EnseignantService} from "../../services/enseignant.service";
import {CadresAdminService} from "../../services/cadres-admin.service";
import {ClassService} from "../../services/class.service";
import {SectionService} from "../../services/section.service";
import {MatiereService} from "../../services/matiere.service";
import {AbsencesService} from "../../services/absences.service";

@Component({
  selector: 'app-dash-analytics',
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export class DashAnalyticsComponent implements OnInit {
  public chartDB: any;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  public deviceProgressBar: any;
  chartTauxReussite;
  sessions:any;
  matieres:any;
  index;
  indexAbsence;
  tauxPresenceEtudiants;
  tauxPresenceEtudiant;
  etudiantsBySessionId;
  classesBySessionId;
  classesCategories;
  reussiteData;
  nonAffecteeData;
  redoublantData;
  selectedSessionId:any;
  nbrEtudiantBySession;
  nbrEnseignantsTotal;
  nbrCadresAdmins;
  nbrClasses;
  nbrClassesBySession;
  nbrSections;
  nbrMatieres;
  nbrEtudiantRedoublant;
  nbrEtudiantReussit;
  nbrEtudiantNull;
  tauxRessit;
  tauxRedoublance;
  tauxNonAffectee;
  setDeviceProgressBar(){
    this.deviceProgressBar = [
      {
        type: 'success',
        value: this.tauxRessit?this.tauxRessit:0
      }, {
        type: 'primary',
        value: this.tauxNonAffectee?this.tauxNonAffectee:0
      }, {
        type: 'danger',
        value: this.tauxRedoublance?this.tauxRedoublance:0
      }
    ];
}
  constructor(
      public apexEvent: ApexChartService,
      public sessionService: SessionService,
      public etudiantService: EtudiantService,
      public enseignantService: EnseignantService,
      public cadresAdminService: CadresAdminService,
      public classService: ClassService,
      public sectionService: SectionService,
      public matiereService: MatiereService,
      public absencesService: AbsencesService
              ) {
    this.chartDB = ChartDB;
    this.dailyVisitorStatus = '1y';


  }

  ngOnInit() {
    this.sessionService.getAllSession().subscribe(sessions=>{
      this.sessions = sessions._embedded.sessions;
      this.selectedSessionId = this.sessions[0].id;
      this.getNbrEtudiantBySession();
      this.getNbrClassesBySession();
      this.getNbrEtudiantByResultatAndSession("redoublant");
      this.getNbrEtudiantByResultatAndSession("nonAffectee");
      this.getNbrEtudiantByResultatAndSession("reussit");
      this.getClassesBySession();
      this.getMatieres();
      console.log(this.sessions[0]);
    })
    this.enseignantService.countAllEnseignants().subscribe(count=>{
      console.log(count);
      this.nbrEnseignantsTotal = count;
    })
    this.cadresAdminService.countAllCadresAdmins().subscribe(count=>{
      this.nbrCadresAdmins = count;
    })
    this.classService.countAllClasses().subscribe(count=>{
      this.nbrClasses = count;
    })
    this.sectionService.countAllSections().subscribe(count=>{
      this.nbrSections = count;
    })
    this.matiereService.countAllMatieres().subscribe(count=>{
      this.nbrMatieres = count;
    })

  }
  getEtudiantsBySessionId(){
    this.etudiantService.getAllEtudiantsBySessionId(this.selectedSessionId).subscribe(etudiants=>{
      this.etudiantsBySessionId = etudiants;
      this.etudiantsBySessionId = this.etudiantsBySessionId._embedded.etudiants;
      this.tauxPresenceEtudiants = [];
      this.indexAbsence = 0;
      for(let etudiant of this.etudiantsBySessionId){
        let nom = etudiant.nom + " "+etudiant.prenom;
        this.tauxPresenceEtudiant={};
        this.tauxPresenceEtudiant["absence"]=[];
        for(let matiere of this.matieres ){
          this.getNbrAllAbsenceByMatiereAndEtudiant(matiere.id,etudiant.id,matiere.matiere,nom,etudiant.id);
        }
      }
    })
  }
  getNbrAllAbsenceByMatiereAndEtudiant(matiereId,etudiantId,matiere,etudiant,id){

    this.absencesService.countAllAbsencesByMatiereIdAndEtudiantId(matiereId,etudiantId).subscribe(count=>{
      this.getNbrAbsenceByEtatAndMatiereAndEtudiant("present",matiereId,etudiantId,count,matiere,etudiant,id);
    })
  }
  getNbrAbsenceByEtatAndMatiereAndEtudiant(etat,matiereId,etudiantId,nbrAbsence,matiere,etudiant,id){
    this.absencesService.countAbsencesByEtatAndMatiereAbsenceIdAndEtudiantAbsenceId(etat,matiereId,etudiantId).subscribe(count=>{
      this.indexAbsence++;
      this.tauxPresenceEtudiant["nom"]=etudiant;
      this.tauxPresenceEtudiant["id"]=id;
      this.tauxPresenceEtudiant["absence"].push(nbrAbsence?Math.round((Number(count)/nbrAbsence)*100):0);
      if(this.indexAbsence==this.matieres.length){
        console.log("absence",count,etat,matiereId,etudiantId,nbrAbsence,matiere);
        this.tauxPresenceEtudiants.push(this.tauxPresenceEtudiant);
        console.log(this.tauxPresenceEtudiants)
        this.tauxPresenceEtudiant={};
        this.tauxPresenceEtudiant["absence"]=[];
        this.indexAbsence=0;
      }
    })
  }
  getMatieres(){
    this.matiereService.getAllMatieres().subscribe(matieres=>{
      this.matieres = matieres;
      this.matieres = this.matieres._embedded.matieres;
      this.getEtudiantsBySessionId();
    })
  }
  getClassesBySession(){
    this.classService.getClassesBySessionId(this.selectedSessionId).subscribe(classes=>{
      let cla:any;
      cla = classes;
      this.classesBySessionId = cla._embedded.classes;
      console.log(this.classesBySessionId);
      this.classesCategories=[];
      this.reussiteData= [];
      this.nonAffecteeData=[];
      this.redoublantData=[];
      this.index = 0;
      for(let cl of this.classesBySessionId){
        this.classesCategories.push(cl.nom_class);
        this.getNbrEtudiantByResulatAndSessionAndClass("redoublant",cl.id);
        this.getNbrEtudiantByResulatAndSessionAndClass("reussit",cl.id);
        this.getNbrEtudiantByResulatAndSessionAndClass("nonAffectee",cl.id);
      }
      console.log(this.classesCategories);
    })
  }
  getNbrClassesBySession(){
    this.classService.countClassesBySessionId(this.selectedSessionId).subscribe(count=>{
      this.nbrClassesBySession = count;
      console.log(this.nbrClassesBySession);
    })
  }
  getNbrEtudiantByResulatAndSessionAndClass(resultat,classId){
    this.etudiantService.countEtudiantsByResultatAndSessionEtudiantIdAndClassEtudiantId(resultat,this.selectedSessionId,classId).subscribe(count=>{
      console.log(resultat,classId);

      switch (resultat) {
        case "redoublant":
          this.redoublantData.push(count?count:0)
          break;
        case "reussit":
          this.reussiteData.push(count?count:0)
          break;
        case "nonAffectee":
          this.index++;
          if(this.index == this.classesBySessionId.length){
            this.setChartReussite();
          }
          this.nonAffecteeData.push(count?count:0)
          break;
      }
    })
  }
  getNbrEtudiantByResultatAndSession(resultat){
    this.etudiantService.countEtudiantsByResultatAndSessionId(resultat,this.selectedSessionId).subscribe(count=>{
      switch (resultat) {
        case "redoublant":
          this.nbrEtudiantRedoublant = count;
          this.tauxRedoublance =Math.round(((this.nbrEtudiantRedoublant/this.nbrEtudiantBySession)*100));
          this.setDeviceProgressBar();
          break;
        case "reussit":
          this.nbrEtudiantReussit = count;
          this.tauxRessit = Math.round(((this.nbrEtudiantReussit/this.nbrEtudiantBySession)*100));
          this.setDeviceProgressBar();
          break;
        case "nonAffectee":
          this.nbrEtudiantNull = count;
          this.tauxNonAffectee = Math.round(((this.nbrEtudiantNull/this.nbrEtudiantBySession)*100));
          this.setDeviceProgressBar();
          break;
      }

    })
  }
  getNbrEtudiantBySession(){
   this.etudiantService.countEtudiantsBySessionEtudiantId(this.selectedSessionId).subscribe(count=>{
     this.nbrEtudiantBySession = count;
   });

  }

  onChangeSession(sessionId){
    this.selectedSessionId = sessionId;
    this.getNbrEtudiantBySession();
    this.getNbrClassesBySession()
    this.getNbrEtudiantByResultatAndSession("redoublant");
    this.getNbrEtudiantByResultatAndSession("nonAffectee");
    this.getNbrEtudiantByResultatAndSession("reussit");
    this.getClassesBySession();
    this.getMatieres()
  }

  setChartReussite(){
    this.chartTauxReussite =  {
      chart: {
        height: 200,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#0e9e4a','#4680ff','#ff5252'],
      responsive: [{
        breakpoint: 0,
        options: {
          legend: {
            position: 'bottom',
            offsetX: 0,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      series: [{
        name: 'Reussit',
        data: this.reussiteData
      }, {
        name: 'Non Affectee',
        data: this.nonAffecteeData
      }, {
        name: 'Redoublant',
        data: this.redoublantData
      }],
      xaxis: {
        type: 'text',
        categories: this.classesCategories,
      },
      legend: {
        position: 'right',
        offsetY: 25
      },
      fill: {
        opacity: 1
      },
    };
  }

}
