import {Box, Button, Card} from "@mui/material";

export const App = () => {
    const onButtonClick = () => {
      fetch('http://localhost:3000/addToBasket')
    };

    return     <Box sx={{padding: 2, boxSizing: 'border-box'}}>
    <Card sx={{width: '100%', display: 'grid', placeItems: 'center', padding: 4, boxSizing: 'border-box'}}>
        I am in iframe. I will be sending messages to mock BE.
        <Button variant={'contained'} onClick={onButtonClick}>Add to basket</Button>
    </Card>
    </Box>
}