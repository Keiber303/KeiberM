export default class Cl_vArticulo {
    constructor() {
      this.inCosto = document.getElementById("articuloForm_inCosto");
      this.btProcesar = document.getElementById("articuloForm_btProcesar");
    }
    get costo() {
      return +this.inCosto.value;
    }
  }