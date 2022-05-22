export default function Contact(){
    return(
        <div className="containter">
            <div className="row">
                <div className="col-md-4">
                    <div class="form-group">
                        <label>Nombre completo</label>
                        <input type="text" class="form-control" placeholder="Eliana Jurado"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Correo</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="elianajurado0825@gmail.com"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Asunto (selecciona)</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>Dudas</option>
                        <option>Cotización</option>
                        <option>Negociación</option>
                        <option>Reclamo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Mensaje</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}