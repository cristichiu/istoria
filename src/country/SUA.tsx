import { MouseEventHandler } from "react"

interface ILocal { closeClick(country: string): MouseEventHandler<HTMLDivElement> }

const Sua = ({closeClick}: ILocal) => {
    return (<>
    <div className="countryContainer sua">
        <div className="countryContent">
            <div className="countryClose" onClick={() => closeClick("sua")}></div>
            <div className="scroll">
                <div className="title">SUA</div>
                <div className="titleDescription">
                    <div className="line"></div>
                    <div className="text">Depre George Mason</div>
                </div>
                <div className="foto suaFoto"></div>
                <div className="fontMin">
                    George Mason (11 decembrie 1725 [ OS 30 noiembrie 1725] – 7 octombrie 1792) a fost un plantator american , politician, părinte fondator și delegat la Convenția Constituțională a SUA din 1787, unul dintre cei trei delegați prezenți care au refuzat să semneze. Constitutia . _ Scrierile sale, inclusiv părți substanțiale din Hotărârile Fairfax din 1774, Declarația Drepturilor din Virginia din 1776 și obiecțiile sale la această Constituție a Guvernului(1787) opunându-se ratificării, au exercitat o influență semnificativă asupra gândirii și evenimentelor politice americane. Declarația Drepturilor din Virginia, de care Mason a fost în principal autor, a servit drept bază pentru Declarația Drepturilor Statelor Unite, al cărei tată a fost considerat. Mason s-a născut în 1725, cel mai probabil în ceea ce este acum Fairfax County, Virginia . Tatăl său a murit când era tânăr, iar mama sa a gestionat moșiile familiei până când a ajuns la majoritate. S-a căsătorit în 1750, a construit Gunston Hall și a trăit viața unui scutier de țară , supravegheându-și pământurile, familia și sclavii . A slujit pentru scurt timp în Casa Burgesses și s-a implicat în afacerile comunității, uneori slujind cu vecinul său George Washington . Pe măsură ce tensiunile au crescut între Marea Britanieși coloniile nord-americane, Mason a venit să susțină partea colonială, folosindu-și cunoștințele și experiența pentru a ajuta cauza revoluționară, găsind modalități de a rezolva Stamp Act din 1765 și slujind în a patra Convenție pro-independență din Virginia din 1775 și a cincea . Convenția din Virginia din 1776. Mason a pregătit primul proiect al Declarației Drepturilor din Virginia în 1776, iar cuvintele sale au format o mare parte din textul adoptat de Convenția finală revoluționară din Virginia. A scris și o constituție pentru stat; Thomas Jefferson și alții au căutat ca convenția să adopte ideile lor, dar au descoperit că versiunea lui Mason nu poate fi oprită. În timpul Războiului de Revoluție Americană , Mason a fost membru al puternicei Camere a Delegaților a Adunării Generale din Virginia , dar spre iritația Washingtonului și a altora, a refuzat să slujească în Congresul Continental din Philadelphia, invocând angajamentele legate de sănătate și familie.
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Sua