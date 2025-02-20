export default class Cl_mBodega {
    constructor() {
        this.acumGanancia = 0
    }
    procesarArticulo(a) {
        this.acumGanancia += a.ganancia()
    }
    totalGanancia() {
        return this.acumGanancia
    }
}