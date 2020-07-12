import * as React from 'react';
import { Button } from '@material-ui/core';

interface ToggleProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
    message: string
}

export function Toggle(Props: ToggleProps) {
    return <Button variant="contained" onClick={Props.ClickHandler}>{Props.message}</Button>
}