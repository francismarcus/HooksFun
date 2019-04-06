import React, { useState } from 'react';
import { Wrapper, Title, Button } from './ClickCounter.styles';

const ClickCounter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <Wrapper>
            <Title>
                The counter is currently {count}
            </Title>
            <Button
                onClick={increment}> +
            </Button>
            <Button
                onClick={decrement}> -
            </Button>
        </Wrapper>
    )
}

export default ClickCounter;
