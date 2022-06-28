const alunos = [
    {
        nome: 'Chris',
        nota: 9,
        turma: '2C',
    },
    {
        nome: 'João',
        nota: 5,
        turma: '3C',
    },
    {
        nome: 'Nicolas',
        nota: 6,
        turma: '2B',
    }
]


function AlunosAprovados(arr, media){
    let aprovados = [];
    
    
    
    for(let i =0; i < arr.length; i++){
    

        const {nota, nome} = arr[i];
        
        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    
    return aprovados;
}

console.log(AlunosAprovados(alunos, 6));