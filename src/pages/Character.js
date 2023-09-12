export default function Character() {
    return (
        <div className='main'>
            <div className="character-section">
                <div className="character-stats">
                    <div className="base-stats">
                        <div className="base-stats-card">
                            <img 
                                className="base-stats-icon"
                                src = "https://cdn-icons-png.flaticon.com/512/1803/1803495.png"
                                alt = "stat-icon-1"
                            />
                            <p className="base-stats-card-info">
                                Initiative <br/> 0
                            </p>
                        </div>
                        <div className="base-stats-card">
                            <img 
                                className="base-stats-icon"
                                src = "https://cdn1.iconfinder.com/data/icons/game-design-volume-1-2/512/Hearts_Life-512.png"
                                alt = "stat-icon-2"
                            />
                            <p className="base-stats-card-info">
                                Health <br/> 45
                            </p>
                        </div>
                        <div className="base-stats-card">
                            <img 
                                className="base-stats-icon"
                                src = "https://cdn-icons-png.flaticon.com/512/4727/4727247.png"
                                alt = "stat-icon-3"
                            />
                            <p className="base-stats-card-info">
                                Speed <br/> 30
                            </p>
                        </div>
                    </div>
                    <div className="base-stats">
                        <div className="base-stats-card">
                            <img 
                                className="base-stats-icon"
                                src = "https://cdn-icons-png.flaticon.com/512/831/831662.png"
                                alt = "stat-icon-3"
                            />
                            <p className="base-stats-card-info">
                                Hit Dice <br/> 6d8
                            </p>
                        </div>
                        <div className="base-stats-card">
                            <img 
                                className="base-stats-icon"
                                src = "https://cdn3.iconfinder.com/data/icons/medieval-2d-rpg-game-items-weapons-armour-helmets-/26/GAME-SVG_--56-512.png"
                                alt = "stat-icon-3"
                            />
                            <p className="base-stats-card-info">
                                Armor Class <br/> 18
                            </p>
                        </div>
                        <div className="base-stats-card">
                            <img 
                                className="base-stats-icon"
                                src = "https://cdn-icons-png.flaticon.com/512/4697/4697495.png"
                                alt = "stat-icon-3"
                            />
                            <p className="base-stats-card-info">
                                Proficiency <br/> +3
                            </p>
                        </div>
                    </div>
                    <div className="base-stats">
                        <details className="base-stat-value">
                            <summary>
                                Strength
                            </summary>
                            <p className="base-stat-value-number">Score:12</p>
                            <p className="base-stat-value-number">Modifier:+1</p>
                            <p className="base-stat-value-number">Save:+1</p>
                        </details>
                        <details className="base-stat-value">
                            <summary>
                                Dexterity
                            </summary>
                            <p className="base-stat-value-number">Score:10</p>
                            <p className="base-stat-value-number">Modifier:0</p>
                            <p className="base-stat-value-number">Save:0</p>
                        </details>
                        <details className="base-stat-value">
                            <summary>
                                Constitution
                            </summary>
                            <p className="base-stat-value-number">Score:14</p>
                            <p className="base-stat-value-number">Modifier:+2</p>
                            <p className="base-stat-value-number">Save:+2</p>
                        </details>
                        <details className="base-stat-value">
                            <summary>
                                Intelligence
                            </summary>
                            <p className="base-stat-value-number">Score:10</p>
                            <p className="base-stat-value-number">Modifier:0</p>
                            <p className="base-stat-value-number">Save:0</p>
                        </details>
                        <details className="base-stat-value">
                            <summary>
                                Wisdom
                            </summary>
                            <p className="base-stat-value-number">Score:18</p>
                            <p className="base-stat-value-number">Modifier:+4</p>
                            <p className="base-stat-value-number">Save:+7</p>
                        </details>
                        <details className="base-stat-value">
                            <summary>
                                Charisma
                            </summary>
                            <p className="base-stat-value-number">Score:13</p>
                            <p className="base-stat-value-number">Modifier:+1</p>
                            <p className="base-stat-value-number">Save:+4</p>
                        </details>
                    </div>
                </div>
                <div className="ability-scores">
                    <ul className="ability-title">Strength +1</ul>
                        <li className="ability-info">Athletics: 1</li>
                    <ul className="ability-title">Dexterity 0</ul>
                        <li className="ability-info">Acrobatics: 0</li>
                        <li className="ability-info">Sleight of Hand: 0</li>
                        <li className="ability-info">Stealth: 0</li>
                    <ul className="ability-title">Intelligence 0</ul>
                        <li className="ability-info">Arcana: 0</li>
                        <li className="ability-info">History: 3</li>
                        <li className="ability-info">Investigation: 0</li>
                        <li className="ability-info">Nature: 0</li>
                        <li className="ability-info">Religion: 3</li>
                    <ul className="ability-title">Wisdom +4</ul>
                        <li className="ability-info">Animal Handling: 4</li>
                        <li className="ability-info">Insight: 7</li>
                        <li className="ability-info">Medicine: 4</li>
                        <li className="ability-info">Perception: 4</li>
                        <li className="ability-info">Survival: 4</li>
                    <ul className="ability-title">Charisma +1</ul>
                        <li className="ability-info">Deception: 1</li>
                        <li className="ability-info">Intimidation: 1</li>
                        <li className="ability-info">Performance: 1</li>
                        <li className="ability-info">Persuasion: 4</li>
                </div>
            </div>
        </div>
    )
}