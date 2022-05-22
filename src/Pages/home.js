import Eliana from '../img/Eliana.png';
import Facebook from '../img/facebook.webp';
import Instagram from '../img/Instagram.png';
import Linkedin from '../img/Linkedin.png';
import './home.css';

export default function HomePage(){
    return(
        <div class="contenedor">
            <div className="container">
                <div className="row">
                    <div>
                        <br></br>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img src={Eliana} height={200} className="rounded-circle"></img>
                        </div>
                        <div>
                            <hr></hr>
                            <br></br>
                            <h2>Contacto</h2>
                            <br></br>
                            <h3 className="text-primary">Teléfono</h3>
                            <p>+57 3206254743</p>
                            <br></br>
                            <h3 className="text-primary">Correo</h3>
                            <a href="mailto:elianajurado0825@gmail.com">elianajurado0825@gmail.com</a>
                            <br></br>
                            <br></br>
                            <h3 className="text-primary">Dirección</h3>
                            <p>Cra 8 #42-62 Villas del bosque, casa 422</p>
                            <br></br>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <a href="https://www.facebook.com/ElianaJurado00" target="_blank">
                                        <img src={Facebook} height={60}></img>
                                    </a>
                                </div>
                                <div className="col-md-3">
                                    <a href="https://www.instagram.com/elianajuradx" target="_blank">
                                        <img src={Instagram} height={60}></img>
                                    </a>
                                </div>
                                <div className="col-md-3">
                                    <a href="https://www.linkedin.com/in/eliana-jurado-garcia-b5b3a9166/" target="_blank">
                                        <img src={Linkedin} height={60}></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h1 className="text-primary">Eliana Jurado García</h1>
                        <br></br>
                        <h2> Metas profesionales</h2>
                        <p>Durante los 4 años que llevo laborando me doy cuenta que trabajar como webmaster se ha convertido en un hobby para mí, por ello busco salir de mi zona de confort y aprender cosas nuevas mientras me actualizo constantemente, quiero convertirme en una desarrolladora front-end senior</p>
                        <hr></hr>
                        <h2>Experiencia de trabajo</h2>
                        <br></br>
                        <h3 className="text-primary">Administradora de servicios para internet</h3>
                        <i>CWTI | Noviembre 2017 - Febrero 2019</i>
                        <p>- Configuración y administración de los servicios web como hosting, dominios y gestores de contenido.
                        <br/>- Escribir código fuente para los diferentes desarrollos de la empresa con lenguajes como HTML, CSS, PHP, LARAVEL y Wordpress
                        <br/>-Gestión de relaciones con clientes y proveedores 
                        <br/>-Soporte técnico y atención al cliente </p>
                        <br/><br/>
                        <h3 className="text-primary">Webmaster</h3>
                        <i>Universidad de Manizales | Febrero 2019 - Actualmente</i>
                        <p>- Configuración y administración de las plataformas de Comunicación Social y Periodismo
                        <br/>- Creación de sitios web con gestores de contenido y código HTML, CSS y JAVASCRIPT
                        <br/>- Manejo de SEO para las plataformas web
                        <br/>- Manejo de redes sociales  </p><br/>
                    </div>
                </div>
                <div className="row">
                    <hr/><br/>
                    <h2 className="text-center">Historia Académica</h2><br/><br/>
                    <div className="col-md-6">
                        <h3 className="text-primary">Técnica profesional en servicios comerciales web</h3>
                        <i>Fundación Carlos Slim (México) | 2018</i><br/><br/>
                        <h3 className="text-primary">Técnica en seguridad informática</h3>
                        <i>Fundación Carlos Slim (México) | 2018</i><br/><br/>
                        <h3 className="text-primary">Curso de programación básica</h3>
                        <i>Platzi |Junio 2018</i><br/><br/>
                        <h3 className="text-primary">Curso marca personal</h3>
                        <i>Platzi | Septiembre 2018</i><br/><br/>
                        <h3 className="text-primary">Marketing Digital</h3>
                        <i>Google Activate | 2018</i><br/><br/>
                        <h3 className="text-primary">Tecnóloga en sistemas de información comerciales para internet</h3>
                        <i>Universidad de Manizales | 2019</i><br/><br/>
                        <h3 className="text-primary">Curso de fundamentos de ingeniería del software</h3>
                        <i>Platzi | Junio 2019</i><br/><br/>
                        <h3 className="text-primary">Curso práctico de Wordpress</h3>
                        <i>Platzi | Marzo 2021</i><br/><br/>
                        <h3 className="text-primary">Curso de Programación orientada a objetos</h3>
                        <i>Platzi | Marzo 2021</i><br/><br/>
                        <h3 className="text-primary">Curso de Introducción a terminal y línea de comandos</h3>
                        <i>Platzi | Marzo 2021</i><br/><br/>
                        <h3 className="text-primary">Curso Introducción a Java SE</h3>
                        <i>Platzi | Abril 2021</i><br/><br/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-primary">Curso de Java SE orientado a objetos</h3>
                        <i>Platzi | Abril 2021</i><br/><br/>
                        <h3 className="text-primary">Curso de Java SE persistencia de datos</h3>
                        <i>Platzi | Mayo 2021</i><br/><br/>
                        <h3 className="text-primary">Curso básico de Javascript</h3>
                        <i>Platzi | Enero 2022</i><br/><br/>
                        <h3 className="text-primary">Curso de fronted developer</h3>
                        <i>Platzi | Febrero 2022</i><br/><br/>
                        <h3 className="text-primary">Curso de closures y scope en Javascript</h3>
                        <i>Platzi | Febrero 2022</i><br/><br/>
                        <h3 className="text-primary">Curso de Ecmascript 6+</h3>
                        <i>Platzi | Abril 2022</i><br/><br/>
                        <h3 className="text-primary">Curso de asincronismo con Javascript</h3>
                        <i>Platzi | Abril 2022</i><br/><br/>
                        <h3 className="text-primary">Curso de gestión de dependencias y paquetes</h3>
                        <i>Platzi | Abril 2022</i><br/><br/>
                        <hr></hr>
                        <h1 className="text-primary">Idiomas que manejo</h1>
                        <p> <b>Inglés</b> - Nivel alcanzado B2 <br/> Cuatrocientos cuarenta (440) horas <br/> Instituto Meyer - 2015 </p><br/>
                        <p><b>Francés</b> - Nivel alcanzado B1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}