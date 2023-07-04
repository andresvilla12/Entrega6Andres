import { Component } from '@angular/core';

@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Be Bolder Portal';
  msg:string = '';

  employees = [
    {'name': 'Andrés' , position: 'Gerente', email: 'andres89@gmail.com'},
    {'name': 'Jhoan' , position: 'Jefe', email: 'jhoan123@gmail.com'}, 
    {'name': 'Carlos' , position: 'Auxiliar', email: 'carlitos67@gmail.com'}
  ];

  model:any={};
  model2:any={};
  

  addEmployee():void{
    this.employees.push(this.model);
    this.msg= 'Campo agregado'

  }

  deleteEmployee (i): void{
    var answer = confirm ('¿Estás seguro que quieres eliminarlo?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado'
    }

  }

  myValue;
  editEmployee (i): void{
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;

  }

  updateEmployee ():void{
    let i = this.myValue;
    for(let j=0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualizado'
        this.model2 = {};
      }
    }

  }

  closeAlert():void {
    this.msg = '';
  }
}
