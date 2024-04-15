import React, { useEffect, useState } from 'react'
import { Modal } from './modal'

export const Modal1erParcial = ({ title, show, onCancel, onSuccess }) => {

    const [generar, setGenerar] = useState(false)

    const [estadoFinanciero, setEstadoFinanciero] = useState({
        nombre_Empresa: '',
        periodo_Contable: '',
        ventas_: '',
        costo_Ventas: '',
        gasto_Ventas: '',
        gasto_Admin: '',
        gasto_Finan: '',
        prod_Finan: '',
        otros_Gastos: '',
        otros_Prod: '',
        firma_Elab: '',
        firma_Auto: ''
    });

    /* const handleGuardarEstadoFinanciero = () => {
        // Aquí guardas los nuevos valores ingresados en los inputs en el objeto estadoFinanciero
        // Puedes acceder a los valores ingresados directamente desde el estado
        console.log('Nuevo estado financiero:', estadoFinanciero);
    }; */

    const handleChangeInput = (event, campo) => {
        // Esta función se encarga de actualizar el estado correspondiente cuando cambia el valor de un input
        const nuevoEstado = { ...estadoFinanciero, [campo]: event.target.value };
        setEstadoFinanciero(nuevoEstado);
    };

    const Generar = () => {

        console.log('Nuevo estado financiero:', estadoFinanciero);

        const Empresa = estadoFinanciero.nombre_Empresa;
        const Periodo = estadoFinanciero.periodo_Contable;
        const Ventas = estadoFinanciero.ventas_;
        const CostoVentas = estadoFinanciero.costo_Ventas;
        var UtilidadBruta = Number(Ventas) - Number(CostoVentas)
        const GastoVentas = estadoFinanciero.gasto_Ventas;
        const GastoAdmin = estadoFinanciero.gasto_Admin;
        var UtilidadOp = Number(UtilidadBruta) - Number(GastoVentas) - Number(GastoAdmin)
        const GastosFinan = estadoFinanciero.gasto_Finan;
        const ProdFinan = estadoFinanciero.prod_Finan;
        const OtrosGastos = estadoFinanciero.otros_Gastos;
        const OtrosProd = estadoFinanciero.otros_Prod;
        var UtilidadImpues = Number(UtilidadOp) - Number(GastosFinan) + Number(ProdFinan) - Number(OtrosGastos) + Number(OtrosProd)
        const ISR = Number(UtilidadImpues) * .3
        const PTU = Number(UtilidadImpues) * .1
        const UtilidadEj = UtilidadImpues - ISR - PTU
        const FirmaElab = estadoFinanciero.firma_Elab;
        const FirmaAuto = estadoFinanciero.firma_Auto;

        const newEmpresa = {
            Empresa: Empresa,
            Periodo: Periodo,
            Ventas: Ventas,
            CostoVentas: CostoVentas,
            UtilidadBruta: UtilidadBruta,
            GastoVentas: GastoVentas,
            GastoAdmin: GastoAdmin,
            UtilidadOp: UtilidadOp,
            GastosFinan: GastosFinan,
            ProdFinan: ProdFinan,
            OtrosGastos: OtrosGastos,
            OtrosProd: OtrosGastos,
            UtilidadImpues: UtilidadImpues,
            ISR: ISR,
            PTU: PTU,
            UtilidadEj: UtilidadEj,
            FirmaElab: FirmaElab,
            FirmaAuto: FirmaAuto,
        }

        console.log(newEmpresa);

        return (
            <div className='flex justify-center w-full py-2'>

                <div className='w-2/3 py-2 pl-10' >
                    <h1 className='text-xl font-bold'> {newEmpresa.Empresa} </h1>
                    <h1 className='text-xl font-bold pb-5'> Estado de Resultado del {newEmpresa.Periodo} </h1>
                    <h1 className='text-lg'> - Ventas </h1>
                    <h1 className='text-lg'> - Costo Ventas </h1>
                    <h1 className='text-lg text-green-800'> = Utilidad Bruta </h1>
                    <h1 className='text-lg'> - Gasto de Ventas </h1>
                    <h1 className='text-lg'> - Gasto de Administación </h1>
                    <h1 className='text-lg text-green-800'> = Utilidad de Operación </h1>
                    <h1 className='text-lg'> - Gastos Financieros </h1>
                    <h1 className='text-lg'> + Productos Financieros </h1>
                    <h1 className='text-lg'> - Otros Gastos </h1>
                    <h1 className='text-lg'> + Otros Productos </h1>
                    <h1 className='text-lg text-green-800'> = Utilidades antes de Impuestos </h1>
                    <h1 className='text-lg'> - ISR 30% </h1>
                    <h1 className='text-lg'> - PTU 10% </h1>
                    <h1 className='text-lg text-green-800'> = Utilidad de ejercicio </h1>
                    <h1 className='text-lg pt-10 underline'> {newEmpresa.FirmaElab} </h1>
                    <h1 className='text-lg font-bold'> Firma de Elaboración </h1>
                </div>

                <div className=' w-1/3 pt-20 text-left'>

                    <h1 className='text-lg'> $ {newEmpresa.Ventas} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.CostoVentas} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.UtilidadBruta} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.GastoVentas} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.GastoAdmin} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.UtilidadOp} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.GastosFinan} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.ProdFinan} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.OtrosGastos} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.OtrosProd} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.UtilidadImpues} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.ISR} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.PTU} </h1>
                    <h1 className='text-lg'> $ {newEmpresa.UtilidadEj} </h1>
                    <h1 className='text-lg pt-10 underline'> {newEmpresa.FirmaAuto} </h1>
                    <h1 className='text-lg font-bold'> Firma de Autorización </h1>
                </div>
            </div>
        )
    }

    return (
        <>
            <Modal
                title={title}
                show={show}
                onCancel={onCancel}
            >

                {generar === false ?
                    <div className='flex flex-col'>
                        <div className='flex justify-center py-4 pt-8 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Nombre de la Empresa: </h1>
                            <input value={estadoFinanciero.nombre_Empresa} onChange={(event) => handleChangeInput(event, 'nombre_Empresa')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Periodo Contable: </h1>
                            <input value={estadoFinanciero.periodo_Contable} onChange={(event) => handleChangeInput(event, 'periodo_Contable')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Ventas: </h1>
                            <input value={estadoFinanciero.ventas_} onChange={(event) => handleChangeInput(event, 'ventas_')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Costo de Ventas: </h1>
                            <input value={estadoFinanciero.costo_Ventas} onChange={(event) => handleChangeInput(event, 'costo_Ventas')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Gasto de Ventas: </h1>
                            <input value={estadoFinanciero.gasto_Ventas} onChange={(event) => handleChangeInput(event, 'gasto_Ventas')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Gasto de Administración: </h1>
                            <input value={estadoFinanciero.gasto_Admin} onChange={(event) => handleChangeInput(event, 'gasto_Admin')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Gastos Financieros: </h1>
                            <input value={estadoFinanciero.gasto_Finan} onChange={(event) => handleChangeInput(event, 'gasto_Finan')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Productos Financieros: </h1>
                            <input value={estadoFinanciero.prod_Finan} onChange={(event) => handleChangeInput(event, 'prod_Finan')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Otros Gastos: </h1>
                            <input value={estadoFinanciero.otros_Gastos} onChange={(event) => handleChangeInput(event, 'otros_Gastos')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Otros Productos: </h1>
                            <input value={estadoFinanciero.otros_Prod} onChange={(event) => handleChangeInput(event, 'otros_Prod')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Firma de Elaboración: </h1>
                            <input value={estadoFinanciero.firma_Elab} onChange={(event) => handleChangeInput(event, 'firma_Elab')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>
                        <div className='flex justify-center py-4 mx-auto'>
                            <h1 className='pr-2 w-1/2'> Firma de Autorización: </h1>
                            <input value={estadoFinanciero.firma_Auto} onChange={(event) => handleChangeInput(event, 'firma_Auto')} className='bg-neutral-200 rounded-sm pl-2 w-1/2' type="text" />
                        </div>

                        <div className='flex justify-around py-4'>
                           {/*  <button onClick={handleGuardarEstadoFinanciero} className='p-4 rounded-lg border border-black bg-neutral-200'>
                                <h1> Guardar Datos </h1>
                            </button> */}
                            <button onClick={() => setGenerar(true)} className='p-4 rounded-lg border border-black bg-neutral-200'>
                                <h1> Generar Estado de Resultados </h1>
                            </button>
                        </div>

                    </div>
                    :
                    <div>
                        {Generar()}
                    </div>
                }


            </Modal>
        </>
    )
}
