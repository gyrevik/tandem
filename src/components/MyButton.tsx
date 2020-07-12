import * as React from 'react';
import { Button } from '@material-ui/core';

interface MyButtonProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
    message: string
}

export function MyButton(Props: MyButtonProps) {
    return <Button variant="contained" onClick={Props.ClickHandler}>{Props.message}</Button>
}