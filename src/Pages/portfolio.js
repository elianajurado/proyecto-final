export default function Portfolio(){
    return(
        <div className="container">
            <br/><h2 className="text-center">Páginas web realizadas</h2>
            <br/><p>Conoce mis trabajos de los últimos 6 meses...</p>
            <div className="row">
                <div className="col-md-2"/>
                    <div className="col-md-8">
                        <div class="list-group">
                            <a href="https://umcentral.umanizales.edu.co/" target="_blank" class="list-group-item list-group-item-action active">
                                Umcentral
                            </a>
                            <a href="https://umfm.com.co/" target="_blank" class="list-group-item list-group-item-action">UMFM</a>
                            <a href="https://cwti.com.co/" target="_blank" class="list-group-item list-group-item-action">CWTI</a>
                            <a href="https://campusmanizales.com.co/" target="_blank" class="list-group-item list-group-item-action">Campus Manizales</a>
                            <a href="https://www.echeverrigiraldo.com/" target="_blank" class="list-group-item list-group-item-action">Constructora Echeverri Giraldo</a>
                        </div>
                    </div>
                <div className="col-md-2"/>
            </div>
        </div>
    )
}