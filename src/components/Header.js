import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate()

    return (
        <div className='header'>
            <img className='header-logo' onClick={() => navigate("/")}
            src = 'https://www.dndbeyond.com/begin/en/logo.png'
            alt = 'dnd-logo'
            />
            <div className='header-option' onClick={() => navigate("/character")}>
                <img className='header-option-icon'
                    src = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/healer-2522926-2113024.png?f=webp'
                    alt = 'character icon'
                />
                <p className='header-option-text'>Character</p>
            </div>
            <div className='header-option' onClick={() => navigate("/personality&background")}>
            <img className='header-option-icon'
                src = 'https://cdn-icons-png.flaticon.com/512/1474/1474710.png'
                alt = 'personality&background icon'
            />
            <p className='header-option-text'>Personality & Background</p>
            </div>
            <div className='header-option'>
            <img className='header-option-icon'
                src = 'https://cdn-icons-png.flaticon.com/512/3504/3504772.png'
                alt = 'spellbook icon'
            />
            <p className='header-option-text'>Spellbook</p>
            </div>
            <div className='header-option'>
            <img className='header-option-icon'
                src = 'https://farmrpg.com/img/items/icon_inv.png'
                alt = 'gear&equipment icon'
            />
            <p className='header-option-text'>Gear & Equipment</p>
            </div>
            <h2 className='header-title'>Ealor: Cleric</h2>
        </div>
    )
}