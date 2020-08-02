// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação

function adicionarAluno(nome){
    
    alunosDaEscola.push({nome,notas:[],cursos:[],faltas: 0});
    console.log("Aluno inserido com sucesso!");
};

function listarAlunos(){
    alunosDaEscola.forEach(valor => {

        console.log("-".repeat(12));
        console.log("Nome do aluno: " + valor.nome);
        console.log("Notas: " + valor.notas.join(", "));
        console.log("Cursos: ");
        if (valor.cursos.length >= 1) {
            valor.cursos.forEach( obj => {
            console.log(" - " + obj.nomeDoCurso + " (" + obj.dataMatricula + ")")});
        } else {
            console.log(" O aluno não possui cursos cadastrados.");
        };
        console.log("Faltas: " + valor.faltas);
        console.log("-".repeat(12));    
        });
};

function buscarAluno(nome){
    let alunoX = alunosDaEscola.find(valor => valor.nome == nome);

    if (alunoX != undefined) {
        console.log("Aluno encontrado...");
        return alunoX;
        } else {
        console.log("Nenhum aluno cadastrado com esse nome.");
    }    
};

function matricularAluno(aluno, curso){
    if (aluno != undefined) {
        aluno.cursos.push(
            {
            nomeDoCurso: curso,
            dataMatricula: new Date()
        });
        console.log("Matrícula finalizada com sucesso!");
    } else {
        console.log("Esse aluno não está cadastrado.")
    }
};

function aplicarFalta(aluno){
    if (aluno != undefined && aluno.cursos.length >0){
        aluno.faltas = aluno.faltas + 1;
        console.log("Falta aplicada com sucesso!");
    }else{
        console.log("Esse aluno não está cadastrado ou não possui cursos.")
    }
};

function aplicarNota(aluno, nota){
    if (aluno != undefined && aluno.cursos.length >0){
        aluno.notas.push(nota);
        console.log("Nota aplicada com sucesso!");
    } else {
        console.log("Esse aluno não está cadastrado ou não possui cursos.")
    }
}
   
function aprovarAluno(aluno){

    if (aluno != undefined && aluno.cursos.length > 0){
        let media = aluno.notas.reduce((nota, sum) => nota + sum) / aluno.notas.length;

        if (media > 7 && aluno.faltas <= 3){
            console.log("Aluno "+ aluno.nome +" APROVADO!")
        } else if (media <= 7 && aluno.faltas <= 3) {
            console.log("Aluno "+ aluno.nome +" REPROVADO por média!");
        } else {
            console.log("Aluno "+ aluno.nome +" REPROVADO por faltas!");
        }
        
    } else {
        console.log("Esse aluno não está cadastrado ou não possui cursos.")
    }
}

adicionarAluno('Celline');
listarAlunos();
console.log(buscarAluno('Celline'));
matricularAluno(buscarAluno('Celline'), 'UX');
aplicarFalta(buscarAluno('Celline'))
aplicarNota(buscarAluno('Celline'), 7.1);
aprovarAluno(buscarAluno('Celline'));
listarAlunos();

// Para que as alterações feitas no objeto 'aluno' fiquem registradas no array principal, 
// é necessário usar a função buscarAluno(aluno) como objeto de entrada nas funções!

