<template>
    <div class="container">
            
            <div class="formulario">
                <div class="logo">
                    <img src="../assets/img/duck.png" alt="">
                    <h2>Mary <span class="text-muted">ERP</span></h2>
                </div> 

                <div class="login-options">
                    <div class="saludos">
                       <span><b>Comenzando<span> tu nueva aventura</span></b></span>
                       <span class="pregunta">Ingresa unos datos para continuar <!-- <a href="">Registrate :D</a> --></span>
                    </div>

                    <div class="nombres option-correo">
                        <div class="form-group">
                            <span><b>Nombre(s)</b></span>
                            <input type="text" placeholder="tu@compañia.com">
                        </div>
                        <div class="form-group">
                            <span><b>Apellido(s)</b></span>
                            <input type="password" placeholder="••••••••">
                        </div>
                    </div>

                    <div class="option-correo">
                        <div class="form-group">
                            <span><b>Correo</b></span>
                            <input type="text" placeholder="tu@compañia.com">
                        </div>
                        <div class="form-group">
                            <span><b>Contraseña</b></span>
                            <input type="password" placeholder="••••••••">
                        </div>
                    </div>

                    <div class="footer">
                        <div class="btn-login">Registrarse</div>
                        <div class="option-google">
                        <div class="sing-button"> <img src="../assets/google.svg" class="google-logo" alt=""> Registrarse con Google</div>
                    </div>
                        <div class="terminos">Al usar Mary, usted acepta nuestra <a>política de privacidad</a> y nuestros <a>términos</a>.</div> 
                    </div>
                </div>
            </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
:root{
    --color-info-dark: #7d8da1;
}
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .saludos{
        margin-top: 2rem;
        width: 98%;
        text-align:left;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .saludos span:first-child{
        font-size: 1.2rem;
    }
    .saludos span span{
        color: var(--color-info-dark)
    }

    .pregunta {
        color: #aaabab;
    }

    .pregunta a{
        color: #1eb0ff;
    }

    .pregunta a:hover{
        color: #8ed0f3;
        cursor: pointer;
    }

    .formulario{
        width: 36vw;
        height: auto;
        border: 1px solid rgb(211, 210, 210);
        border-radius: 8px;
        padding: 2rem;
        background-color: white;
        position: relative;
        display: block;
        transition: all 300ms ease;
        box-shadow: 0 1rem 2rem rgba(132,139,200,0.18);

    }

    @media (max-width: 700px) { 
        .formulario{
            width: 100%;
            border: none;
            box-shadow: none;
        }

        .container{
            background-color: white;
            align-items: start;
        }
     }

     @media (max-width: 1020px){
        .formulario{
            width: 80%;
        }
     }

    .formulario:hover{
        box-shadow: none;
    }
    .logo{
        width: 40%;
        /* border: 1px solid red; */
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }

    .logo h2{
        position: relative;
        top: 2rem;
    }
    
    .logo img{
        width: 5rem;
    }

    .option-google, .option-correo{
  
        width: 98%;
        margin-left: auto;
        margin-right: auto;
    }

    .option-google{
        margin-top: 1rem;
    }

    .option-google div{
        display: flex;
        flex-direction: row;
        border: 1px solid black;
        border-radius: 3px;
        justify-content: center;
        padding: .6rem;
    }

    .option-google div:hover{
        border: 1px solid #1eb0ff;
        color: #1eb0ff;
        cursor: pointer;
    }

    .google-logo{
        width: 13px;
        margin-right: 6px;
    }

    .nombres{
        width: 98%;
        text-align:left;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1.4rem;
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .nombres .form-group{
        width: 48%;
    }

   .option-correo .form-group{
        display: flex;
        flex-direction: column;

   }

   .option-correo .form-group input {
        border: 1px solid var(--color-input-background);
        color: gray;
        margin-top: .4rem;
        margin-bottom: 1.3rem;
        border-radius: 3px;
        padding: 0.6rem;
   }

   .option-correo .form-group input::placeholder{
    color: var(--color-input-background);
   }

   .form-group span{
    display: flex;
    justify-content: space-between;
   }

 

   .footer{
        margin-top: 1rem;
        margin-bottom: 2rem;
   }
   .footer .btn-login{
        width: 98%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 3px;
        background-color: var(--color-primary);
        color: white;
        text-align: center;
        padding: .6rem;
   }

   .btn-login:hover{
    background-color: var(--color-primary-hover);
    cursor: pointer;
   }

    .terminos{
        margin-top: .4rem;
        width: 98%;
        margin-left: auto;
        text-align: center;
        margin-right: auto;
        color: #aaabab;
   }

   .terminos a{
    color: #1eb0ff;
   }

   .terminos a:hover{
        color: #8ed0f3;
        cursor: pointer;
   }

  
</style>