import { MouseEventHandler } from "react"

interface ILocal { closeClick(country: string): MouseEventHandler<HTMLDivElement> }

const Anglia = ({closeClick}: ILocal) => {
    return (<>
    <div className="countryContainer anglia">
        <div className="countryContent">
            <div className="countryClose" onClick={() => closeClick("anglia")}></div>
            <div className="scroll">
                <div className="title">Anglia</div>
                <div className="titleDescription">
                    <div className="line"></div>
                    <div className="text">Parlamentul englez din 1689</div>
                </div>
                <div className="foto angliaFoto"></div>
                <div className="fontMin">
                    Convenția engleză a fost o adunare a Parlamentului Angliei care s-a întrunit între 22 ianuarie și 12 februarie 1689 (în stil vechi 1688, astfel încât legislația sa a fost etichetată cu acel an anterior) și a transferat coroanele Angliei și Irlandei de la Iacob al II -lea la William al III -lea și Maria a II-a. O convenție scoțiană paralelă s-a reunit în martie 1689 și a confirmat că tronul Scoției urma să fie acordat și lui William și Mary. Imediat după Glorioasa Revoluție , cu regele James al II-lea al Angliei în fugă și prințul William al III-lea de Orange apropiindu-se de Londra, contele de Rochester i-a convocat pe Lords Temporal și Lords Spiritual să se adună și li s-au alăturat consilierii privati ​​la 12 decembrie 1688 pentru formează un guvern provizoriu pentru Anglia. James al II-lea s-a întors la Londra pe 16 decembrie; pe 17 a fost efectiv prizonierul lui William care a sosit la Londra a doua zi. Ulterior, William i-a permis lui James să fugă în siguranță, pentru a evita ignominia de a-i face unchiului și socrului său orice rău imediat. William a refuzat coroana ca rege de facto și, în schimb, a convocat o altă adunare de egali la 21 decembrie 1688. La 23 decembrie, James a fugit în Franța. Pe 26 decembrie, colegilor li s-au alăturat membrii supraviețuitori ai Parlamentului lui Carol al II-lea de la Oxford (din domnia anterioară), ignorând parlamentarii care tocmai au fost aleși în Parlamentul loial al lui James din 1685. Contele de Nottingham a propus o restaurare condiționată a regelui James al II-lea, o idee susținută de arhiepiscopul Sancroft , dar propunerea a fost respinsă și, în schimb, adunarea i-a cerut lui William să convoace o convenție.
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Anglia