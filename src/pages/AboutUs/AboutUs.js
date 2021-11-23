import React from 'react';
import "./AboutUs.scss";
import BasicLayout from '../../layout/BasicLayout';
import web from "../../assets/png/web.png";
import idea from "../../assets/png/idea.png";
import heart from "../../assets/png/heart.png";
import share from "../../assets/png/share.png";
import ce from "../../assets/png/cE_logo.png";
import logoVB from "../../assets/png/LogoVB.png";

export default function AboutUs() {
    return (
        <BasicLayout>
            <div class="bigContainer">
                <div class="aboutPage">
                    <img src={logoVB} alt=""></img>
                    <p>
                        <img src={web} alt=""></img>
                        Es una pagina web en la cual puedes mostrar y guardar 
                        los proyectos en los cuales has trabajado con anterioridad.
                    </p>
                    <p>
                        <img src={idea} alt=""></img>
                        Al guardar un registro de tus proyectos, éstos se mostrarán en la página 
                        web para que puedan ser vistos por el resto de usuarios.
                    </p>
                    <p>
                        <img src={share} alt=""></img>
                        Esta interacción permite dar a conocer tus proyectos, así como tambien 
                        tus habilidades a otros usuarios, los cuales podrían ser potenciales clientes!
                    </p>
                    <p>
                        <img src={heart} alt=""></img>
                        Tambien te ofrecemos un espacio para que coloques tus redes sociales 
                        e información de contacto.
                    </p>
                </div>
                <div class="aboutUs">
                    <h2>COFFEE ENCODING</h2>
                    <div class="img_text">
                        <img src={ce} alt=""></img>
                        <div class="au_inf">
                            <div class="texts">
                                <p>
                                    Es una empresa dedicada al desarrollo de software en plataformas diversas como lo son 
                                    la plataforma web o plataformas de escritorio.
                                </p>
                                <p>
                                    Está formada por un grupo de seis jóvenes desarrolladores de diversos softwares 
                                    los cuales complementan el grupo de desarrollo con diferentes habilidades, entre las 
                                    cuales destacan la programación, el testeo y la organización del proceso de desarrollo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout>
    )
}
