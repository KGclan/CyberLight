import React, {FC} from "react";
import cn from "classnames";

import styles from "./neon.module.scss";

interface INeonButton {
    color: 'default' | 'red' | 'orange';
    text: string;
    width: string;
    height: string;
    fontSize?: string;
    is_neon?: boolean;
}

const NeonButton: FC<INeonButton> = ({
    color,
    text,
    width,
    height,
    fontSize,
    is_neon}) => {
    return(
        <button 
            style={{height: height, width: width, fontSize: fontSize}}
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
    );
}

export default NeonButton;