var turing = {
    Q: ["Q0","Q1","Q2","Q3","Q4"],
    E: ["0","1"],
    T: ["0","1","X","Y","B"],
    Q0: "Q0",
    B: "B",
    F: "Q4",
    S: [
        ["Q0","0","Q1","X","R"],
        ["Q0","Y","Q3","Y","R"],
        ["Q1","0","Q1","0","R"],
        ["Q1","1","Q2","Y","L"],
        ["Q1","Y","Q1","Y","R"],
        ["Q2","0","Q2","0","L"],
        ["Q2","X","Q0","X","R"],
        ["Q2","Y","Q2","Y","L"],
        ["Q3","Y","Q3","Y","R"],
        ["Q3","B","Q4","B","R"]
    ]
};
var estAct = "q0";

function ejecutar(){
    var pos = 0;
    var cadena = document.querySelector("#cadena").value;
    while(estAct !== "q4"){
        for(let i = 0; i <= turing.S.length; i++){
            if(turing.S[i][0] === estAct && turing.S[i][1] === cadena[pos]){
                estAct = turing.S[i][2];
                cadena[pos] = turing.S[i][3];
                (turing.S[i][4] === "R" ? ++pos : --pos);
                break;
            }else{
                continue;
            }
        }
    }
}