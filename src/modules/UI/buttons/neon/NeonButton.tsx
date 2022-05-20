import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./neon.module.scss";

interface INeonButton {
    color: 'default' | 'red' | 'orange';
    text: string;
    width: string;
    height: string;
    fontSize?: string;
    is_neon?: boolean;
    to: string;
    gameTitle?: string;
    profileId?: number;
}

const NeonButton = ({
    color,
    text,
    width,
    height,
    fontSize,
    is_neon,
    to,
    gameTitle,
}: INeonButton) => {
    const dispatch = useDispatch();

    return(
        <Link to={to.replace(' ', '')}>
            <button 
                style={{height: height, width: width, fontSize: fontSize}}
                onClick={
                    () => {
                        gameTitle && dispatch({type: 'SET_SELECTED_GAME', payload: gameTitle});
                        window.scrollTo(0, 0);
                    }
                }
                className={cn(styles.neonButton,
                {
                    [styles.default]: color === 'default',
                    [styles.red]: color === 'red',
                    [styles.orange]: color === 'orange',
                    [styles.neonOff]: is_neon === false,
                }
            )}>
                {text}
            </button>
        </Link>
    );
}

export default NeonButton;