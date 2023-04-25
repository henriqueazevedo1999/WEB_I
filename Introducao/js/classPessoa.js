class Pessoa {
    constructor(pName, pDtNasc) {
        this.nome = pName;
        this.dtNasc = new Date(pDtNasc);
    };

    getNome() {
        return this.nome;
    }

    getIdade() {
        var ageDifMs = Date.now() - this.dtNasc;
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}