import * as React from 'react';
import { Button } from '@material-ui/core';

interface ToggleProps {
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Toggle(Props: ToggleProps) {
    return <Button onClick={Props.ClickHandler}>Toggle Data</Button>
}