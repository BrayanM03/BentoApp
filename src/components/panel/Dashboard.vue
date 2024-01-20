<template>
    
        <main>
            <h1>Dashboard</h1>
            <div class="date">
                <input type="date">
            </div>

            <div class="insights">
                <div class="sales">
                    <span class="material-symbols-sharp">payments</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Ventas totales</h3>
                            <h1>$25,156.00</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx='38' cy='38' r='36'></circle>
                            </svg>
                            <div class="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Hoy</small>
                </div>

                <!------- END OF SALES ------>


                <div class="expenses">
                    <span class="material-symbols-sharp">bar_chart</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Gastos totales</h3>
                            <h1>$14,796.00</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx='38' cy='38' r='36'></circle>
                            </svg>
                            <div class="number">
                                <p>62%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Hoy</small>
                </div>

                <!------- END OF EXPENSES ------>


                <div class="income">
                    <span class="material-symbols-sharp">stacked_line_chart</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Ingresos totales</h3>
                            <h1>$10,842.00</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx='38' cy='38' r='36'></circle>
                            </svg>
                            <div class="number">
                                <p>44%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Hoy</small>
                </div>

                <!------- END OF SALES ------>

            </div>

            <!------- END OF INSIGHTS ------>

            <div class="recent-orders">
                <h2>Ordenes recientes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cliente</th>
                            <th>Importe</th>
                            <th>Fecha</th>
                            <th>Estatus</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Brayan Maldonado</td>
                            <td>$1,600.00</td>
                            <td>2022-09-12</td>
                            <td>Activa</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sistemas y asociados Beltran</td>
                            <td>$45,900.00</td>
                            <td>2022-08-12</td>
                            <td>Completada</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Madereria Martinez</td>
                            <td>$35,600.00</td>
                            <td>2022-08-20</td>
                            <td>Completada</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Ernesto Pradera</td>
                            <td>$7,500.00</td>
                            <td>2022-07-04</td>
                            <td class="warning">Pendiente</td>
                            <td class="primary">-</td>
                        </tr>

                    </tbody>
                </table>
                <a href="#">Mostrar todas</a>
            </div>
        </main>
    
</template>
<script lang="ts">
export default {
    name: "Dashboard"
}
</script>
<style lang="">
    
</style>