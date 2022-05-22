import './contact.css';

export default function Contact(){
    return(
        <div class="contenedor">
            <div className="containter">
                <div className="row">
                    <div className="col-md-2"/>
                    <div className="col-md-8">
                        <div class="form-group">
                            <label>Nombre completo</label>
                            <input type="text" class="form-control label" placeholder="Eliana Jurado"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Correo</label>
                            <input type="email" class="form-control label" id="exampleFormControlInput1" placeholder="elianajurado0825@gmail.com"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Asunto (selecciona)</label>
                            <select class="form-control select " id="exampleFormControlSelect1">
                            <option>Dudas</option>
                            <option>Cotización</option>
                            <option>Negociación</option>
                            <option>Reclamo</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Mensaje</label>
                            <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe algo aquí..."></textarea>
                        </div>
                        <br/><button type="button" class="btn btn-success">Enviar</button>
                    </div>
                    <div className="col-md-2"/>
                </div>
            </div>
        </div>
    )
}