import {Box, Card, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import iFrameResize from 'iframe-resizer';
import {useSocket} from "./useSocket.ts";

export const App = () => {
    const [basket, setBasket] = useState<string[]>([]);
    useEffect(() => {
        iFrameResize.iframeResizer({ log: true, checkOrigin: false, sizeWidth: true }, '#pocIframe')
    }, []);

    const addToBasket = (productName: string) => {
        setBasket(basket => [...basket, productName]);
    };

    useSocket(addToBasket);

    return <Card sx={{width: '100%', display: 'grid', placeItems: 'center', padding: 4, boxSizing: 'border-box'}}>
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%'}}>
            <Box><iframe id={'pocIframe'} src={'http://localhost:8000'}></iframe></Box>
            <Box><Typography>Here will be basket</Typography>
                <ul>
                    {basket.map(item => {
                        return <li>{item}</li>
                    })}
                </ul>
            </Box>
        </Box>
    </Card>
}