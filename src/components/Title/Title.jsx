import './Title.css'

export default function TitleComponent(props) {

    // const title =  

    return (
        <>
            <div className="main-title">
                { props.icono && <i className={props.icono}></i> }

                <h2 > { props.titulo.toUpperCase() } </h2>
            </div>

        </>
    )


}