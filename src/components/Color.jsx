import { useState, useEffect } from "react";
import GhPolyglot from 'gh-polyglot';
import mix from 'mix-css-color';
import ntc from '../utils/ntc'
import { 
    Button, 
    ButtonGroup,
    Box,
    Input,
    HStack
} from '@chakra-ui/react'

export default function Color() {
    const [Color, setColor] = useState("");
    const [ColorName, setColorName] = useState("");
    const [Langs, setLangs] = useState([]);
    const [Inp, setInp] = useState("");

    const handleClick = () => {
        const me = new GhPolyglot(Inp);
        me.userStats(function (err, stats) {
            if (err) {
                console.log(err);
                setColorName("Not Found!");
                return;
            }
            const total = stats[0]['value'] + stats[1]['value']
            const percent = Math.round((stats[0]['value'] / total) * 100)
            const hex = mix(stats[0]['color'], stats[1]['color'], percent)['hex']
            setColor(hex);
            console.log(ntc.name(hex).toString())
            setColorName(ntc.name(hex)[1]);
            setLangs([
                {
                    name: stats[0]['label'],
                    percentage: percent,
                    hex: stats[0]['color']
                },
                {
                    name: stats[1]['label'],
                    percentage: 100 - percent,
                    hex: stats[1]['color']
                }
            ])
        })
    }
    const handleChange = (e) => {
        //console.log(e.target.value)
        setInp(e.target.value);
    }
    const colorClick = () => {
        navigator.clipboard.writeText(Color);
        alert("Copied to clipboard!")
    }
    return (
        <div className="main-container">
            <div className="card-cont">
                <div className="input-cont">
                    <HStack spacing={2} width={'100%'}>
                        <Input 
                            label="Username"
                            placeholder="Enter GitHub Username"
                            minWidth={'70%'}
                            className="input-box"
                            onChange={(e) => handleChange(e)}
                        />
                        <Button className="btn" minWidth={'25%'} onClick={handleClick}>Get the color</Button>
                    </HStack>
                </div>
                <Box className="color-card" borderRadius={'0.375em'}>
                    <Box className="user-color" onClick={colorClick} backgroundColor={`${Color}`} borderTopLeftRadius={'0.375em'} borderBottomLeftRadius={'0.375em'}>
                        <div className="color"></div>
                    </Box>
                    <div className="details">
                        <div className="details-head">
                            <h2 className="main-heading">@{Inp}'s OctoColor is ~ {ColorName}</h2>
                        </div>
                        <div className="details-body">
                            <div className="color-details">
                                <h4 className="secondary-heading">Color Details</h4>
                                <p>Hex | <span>{Color}</span></p>
                                <p>Name | <span>{ColorName}</span></p>
                            </div>
                            <div className="lang-details">
                                <h4 className="secondary-heading">Top Languages</h4>
                                <p>{(typeof Langs !== 'undefined' && Langs.length > 0) ? `${Langs[0].name} | ${Langs[0].percentage}%` : ".."}</p>
                                <p>{(typeof Langs !== 'undefined' && Langs.length > 0) ? `${Langs[1].name} | ${Langs[1].percentage}%` : ".."}</p>
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}