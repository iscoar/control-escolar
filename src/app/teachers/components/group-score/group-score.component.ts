import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-group-score',
  templateUrl: './group-score.component.html',
  styleUrls: ['./group-score.component.sass']
})
export class GroupScoreComponent implements OnInit {

  elements: any = [
    { id: 91706000, description: 'Modelo de procesos de negocio', evpa1: 9, evpa2: 0.0, evpa3: 0.0, re: 0.0, prom: 0.0 },
    { id: 91706000, description: 'Modelo de procesos de negocio', evpa1: 9, evpa2: 0.0, evpa3: 0.0, re: 0.0, prom: 0.0 },
    { id: 91706000, description: 'Modelo de procesos de negocio', evpa1: 9, evpa2: 0.0, evpa3: 0.0, re: 0.0, prom: 0.0 },
  ];

  headElements = ['Materia', 'Descripcion', 'EVPA1', 'EVPA2', 'EVPA3', 'RE', 'PROM', 'Accion'];
  criteria: any[] = [];
  scores: any[] = [];
  levels: any[] = [];
  editField: string;

  constructor(
    private _teacherService: TeacherService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getScores();
  }

  getScores() {
    this._route.params.subscribe(
      params => {
        this._teacherService.scores(params['name'], params['subject']).subscribe(
          response => {
            if (response.status == 'success') {
              console.log(response.evaluation_criteria);
              console.log(response.student_scores);
              for (const key in response.evaluation_criteria) {
                if (response.evaluation_criteria.hasOwnProperty(key)) {
                  const element = response.evaluation_criteria[key];
                  this.criteria.push(element);
                }
              }
              for (const key in response.student_scores) {
                if (response.student_scores.hasOwnProperty(key)) {
                  const element = response.student_scores[key];
                  this.scores.push(element);
                }
              }
              for (const key in response.levels) {
                if (response.levels.hasOwnProperty(key)) {
                  const element = response.levels[key];
                  this.levels.push(element);
                }
              }
              console.log(this.scores);
            }
          }
        )
      }
    )
  }

  levelChanged(gel_id) {
    this._route.params.subscribe(
      params => {
        this._teacherService.levelScore(params['name'], params['subject'], gel_id).subscribe(
          response => {
            this.criteria = [];
            this.scores = [];
            if (response.status == 'success') {
              for (const key in response.evaluation_criteria) {
                if (response.evaluation_criteria.hasOwnProperty(key)) {
                  const element = response.evaluation_criteria[key];
                  this.criteria.push(element);
                }
              }
              console.log('Cambiando criterios');
              for (const key in response.student_scores) {
                if (response.student_scores.hasOwnProperty(key)) {
                  const element = response.student_scores[key];
                  this.scores.push(element);
                }
              }
              console.log('Cambiando calificaciones');
            }
          }
        )
      }
    )
  }

  updateList(score_id:number, id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.scores[score_id][id][property] = editField;
  }
  
  changeValue(id: number, property: string, event: any) {
    console.log(event);
    // this.editField = event.target.textContent;
  }
  
  saveScores() {
    console.log('Guardando...');
    console.log(this.scores);
  }

}
