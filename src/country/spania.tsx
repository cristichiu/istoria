import { MouseEventHandler } from "react"

interface ILocal { closeClick(country: string): MouseEventHandler<HTMLDivElement> }

const Spania = ({closeClick}: ILocal) => {
    return (<>
    <div className="countryContainer spania">
        <div className="countryContent">
            <div className="countryClose" onClick={() => closeClick("spania")}></div>
            <div className="scroll">
                <div className="title">Spania</div>
                <div className="titleDescription">
                    <div className="line"></div>
                    <div className="text">Despre Fredinant al II-lea</div>
                </div>
                <div className="foto spniaFoto"></div>
                <div className="fontMin">
                Ferdinand al II-lea din 1512 până la moartea sa în 1516. El a fost, de asemenea, Duce nominal al vechilor Ducate de Atena și Neopatria . A fost rege al Castiliei și Leónului (ca Ferdinand al V-lea ) între 1475 și 1504, alături de soția sa, regina Isabella I. Din 1506 până în 1516, a fost regent al Coroanei Castiliei , făcându-l conducătorul efectiv al Castiliei. Din 1511 până în 1516, el s-a autodenumit Imperator totius Africa (împăratul întregii Africi), după ce a cucerit Tlemcen și a făcut Zayyanid.Sultan, Abu Abdallah V , vasalul său.  A fost, de asemenea, Marele Maestru al Ordinelor Militare Spaniole de la Santiago (1499-1516), Calatrava (1487-1516), Alcantara (1492-1516) și Montesa (1499-1516), după ce le-a anexat definitiv la Spaniol. Coroană. El a domnit împreună cu Isabella peste o Spanie unificată dinastic ; împreună sunt cunoscuți sub numele de Monarhi Catolici . Ferdinand este considerat primul rege de facto al Spaniei și a fost descris ca atare în timpul domniei sale ( latină : Rex Hispaniarum ;spaniolă : Rey de España ). Coroana Aragonului pe care Ferdinand a moștenit-o în 1479 includea regatele Aragonului , Valencia , Mallorca , Sardinia și Sicilia , precum și principatul Cataloniei . Căsătoria sa cu regina Isabella I a Castiliei este considerată „piatra de temelie a întemeierii monarhiei spaniole”. Ferdinand a jucat un rol major în colonizarea europeană a Americilor , de la întocmirea Capitulațiilor din Santa Fe (anticipând un Columb necinstit ) până la ca contabilul său personal, Luis de Santangel , să-și asume mai mult de jumătate din cost (2 milioane de maravedi din cele 3 ). milioane total) de sponsorizare a primei călătorii a lui Cristofor Columb în 1492 (asigurându-se că Coroana era practic fără riscuri în acest mare pariu) pentru a negocia prudent termenii cu Ioan al II-lea al Portugaliei pentru Tratatul de la Tordesillas . În același an, cuplul a învins Granada , ultimul stat musulman din Europa de Vest, completând astfel Reconquista de secole . Ferdinand a fost rege al Coroanei Castiliei până la moartea Isabellei în 1504, când fiica lor Joanna a devenit regină. În acel an, după un război cu Franța, Ferdinand a cucerit Regatul Napoli . În 1506, el a devenit regent al Castiliei (ca Rey Señor de Castilla ) în numele fiicei sale, Joanna, instabilă mental. În 1505, ca parte a unui tratat cu Franța, Ferdinand s-a căsătorit cu Germaine de Foix , nepoata regelui Ludovic al XII-lea al Franței și sora lui Gaston de Foix (Tunetul Italiei). Singurul copil al lui Ferdinand și Germaine, John, a murit la scurt timp după nașterea lui. În 1512, Ferdinand a cucerit Regatul Navarrei, conducând toate teritoriile care cuprind Spania actuală până la moartea sa în 1516. El a fost succedat de copilul său cel mai mare supraviețuitor, Joanna și nepotul său Charles . Strănepotul lui Ferdinand, Filip al II-lea al Spaniei , în timp ce se uita la un portret al lui, este înregistrat că a spus „Îi datorăm totul”. Istoricul modern Sir John H. Elliott a concluzionat că „în măsura în care [înființarea Imperiului Spaniol ] poate fi atribuită oricărui set particular de politici și acțiuni, acestea au fost cele ale regelui Ferdinand și ale cardinalului Cisneros”.
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Spania