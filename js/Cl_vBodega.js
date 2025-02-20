import Cl_vArticulo from "./Cl_vArticulo.js";
import Cl_mArticulo from "./Cl_mArticulo.js";
export default class Cl_vBodega {
  constructor() {
    this.controlador = null;
    this.lblTotalGanancia = document.getElementById(
      "mainForm_lblTotalGanancia"
    );
    this.Cl_vArticulo = new Cl_vArticulo();
    this.Cl_vArticulo.btProcesar.onclick = () =>
      this.controlador.procesarArticulo();
  }
  procesarArticulo() {
    this.mArticulo = new Cl_mArticulo({
      costo: this.Cl_vArticulo.costo,
    });
    return this.mArticulo;
  }
  reportarArticulo(
    totalGanancia,
  ) {
    this.lblTotalGanancia.innerHTML = totalGanancia;
  }
}