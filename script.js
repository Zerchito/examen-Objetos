//Departamento --------------------
function Departamento(name){
    this.name = name;
}
Departamento.prototype.laboratorios =[];
Departamento.prototype.verPersonalLaboratorios = function (){
    var index;
    console.log(this.name);
    for( index = 0 ; index < this.laboratorios.length ; index++ ){
        this.laboratorios[index].mostrarPersonal();
    }
}
Departamento.prototype.agregarLaboratorio = function (labo){
    this.laboratorios.push(labo);
}

//Laboratorio ------------------
function Laboratorio(tipo){
    this.tipo = tipo;
}
Laboratorio.prototype.personal = [];
Laboratorio.prototype.agregarPersonal=function(name, salary , typePersonal){
    this.personal.push(new typePersonal(name,salary));
}
Laboratorio.prototype.mostrarPersonal = function (){
    var index;
    console.log(this.tipo);
    for( index = 0 ; index < this.personal.length ; index++ ){
        this.personal[index].mostrarse();
    }
}
//Adminsitrador ------------------
function Administrador ( name , salary ){
    this.name = name;
    this.salary = salary;
}

Administrador.prototype.verSalario = function(){
    console.log(salary);
}
Administrador.prototype.mostrarse = function(){
    console.log('Nombre:'+this.name+'  Salario:'+this.salary+' Bs');
}
//Auxiliares -----------------
function Auxiliar( name , salary ){
    this.name = name;
    this.salary = salary;
}
function AuxiliarPago( name , salary ){
    this.name = name;
    this.salary = salary;
}
AuxiliarPago.prototype = new Auxiliar;
AuxiliarPago.prototype.mostrarse = function(){
    console.log('Nombre:'+this.name+'  Salario:'+this.salary+' Bs   ');
}
function AuxiliarAdHonorem( name , salary ){
    this.name = name;
    this.salary = salary;
}
AuxiliarAdHonorem.prototype = new Auxiliar;
AuxiliarAdHonorem.prototype.mostrarse = function(){
    console.log('Nombre:'+this.name);
}


var departamento = new Departamento('Informatica-Sistemas');
var laboratorio = new Laboratorio('Computo');
departamento.agregarLaboratorio(laboratorio);
laboratorio.agregarPersonal('Orlando',100,Administrador);
laboratorio.agregarPersonal('Javier',200,Administrador);
laboratorio.agregarPersonal('Mister x',0,AuxiliarAdHonorem);
laboratorio.agregarPersonal('La gata',50,AuxiliarPago);
laboratorio.agregarPersonal('El gato',10,AuxiliarAdHonorem);
departamento.verPersonalLaboratorios();
