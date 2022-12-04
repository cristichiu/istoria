import { MouseEventHandler } from "react"

interface ILocal { closeClick(country: string): MouseEventHandler<HTMLDivElement> }

const Franta = ({closeClick}: ILocal) => {
    return (<>
    <div className="countryContainer franta">
        <div className="countryContent">
            <div className="countryClose" onClick={() => closeClick("franta")}></div>
            <div className="scroll">
                <div className="title">Franța</div>
                <div className="titleDescription">
                    <div className="line"></div>
                    <div className="text">Adunarea Naţională Constituantă</div>
                </div>
                <div className="foto frantaFoto"></div>
                <div className="fontMin">
                    Adunarea Naţională Constituantă ( franceză : Assemblée nationale constituante ) a fost o adunare constituantă formată din Adunarea Naţională la 9 iulie 1789 în timpul primelor etape ale Revoluţiei Franceze . S-a dizolvat la 30 septembrie 1791 și a fost succedat de Adunarea Legislativă.
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Franta