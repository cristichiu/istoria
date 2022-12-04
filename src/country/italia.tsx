import { MouseEventHandler } from "react"

interface ILocal { closeClick(country: string): MouseEventHandler<HTMLDivElement> }

const Italia = ({closeClick}: ILocal) => {
    return (<>
    <div className="countryContainer italia">
        <div className="countryContent">
            <div className="countryClose" onClick={() => closeClick("italia")}></div>
            <div className="scroll">
                <div className="title">Italia</div>
                <div className="titleDescription">
                    <div className="line"></div>
                    <div className="text">Papa Leon al XIII-lea</div>
                </div>
                <div className="foto italiaFoto"></div>
                <div className="fontMin">
                    Papa Leon al XIII-lea ( în italiană : Leone XIII ; născut Vincenzo Gioacchino Raffaele Luigi Pecci ; 2 martie 1810 – 20 iulie 1903) a fost șeful Bisericii Catolice de la 20 februarie 1878 până la moartea sa în iulie 1903. A trăit până la vârsta de 93, el a fost al doilea ca vechime Papă înaintea Papei Agatho și al treilea ca mai longeviv papă din istorie, înaintea Papei Benedict al XVI-lea ca Papă emerit , și a avut a patra cea mai lungă domnie dintre toate, după cele ale Sf. Petru. , Pius al IX-lea (predecesorul său imediat) și Ioan Paul al II-lea . El este bine cunoscut pentru intelectualismul său și încercările sale de a defini poziția Bisericii Catolice în ceea ce privește gândirea modernă. În celebra sa enciclică Rerum novarum din 1891 , Papa Leon a subliniat drepturile lucrătorilor la un salariu echitabil, condiții de muncă sigure și formarea de sindicate , afirmând în același timp drepturile de proprietate și de libera întreprindere, opunându-se atât socialismului , cât și capitalismului laissez-faire . Cu acea enciclică, el a devenit popular numit „Papa social” și „Papa muncitorilor”, creând, de asemenea, bazele gândirii moderne în doctrina socială a bisericii, influențând gândurile succesorilor săi. A influențat mariologia Bisericii Catolicesi a promovat atat rozariul cat si scapularul . La alegerea sa, el a căutat imediat să reînvie tomismul , teologia lui Toma d'Aquino , dorind să se refere la el drept fundamentul teologic şi filozofic oficial al Bisericii Catolice. Drept urmare, a sponsorizat Editio Leonina în 1879. Leon al XIII-lea este amintit în special pentru credința sa că activitatea pastorală în domeniul socio-politic a fost și o misiune vitală a bisericii ca vehicul al justiției sociale și al menținerii drepturilor și demnităților persoanei umane.
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Italia