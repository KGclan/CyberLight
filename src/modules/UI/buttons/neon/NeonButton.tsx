import React, {FC} from "react";

interface INeonButton {
    color: 'red' | 'yellow' | 'orange';
    text: string;
    width: string;
    height: string;
}

const NeonButton: FC<INeonButton> = ({
    color,
    text,
    width,
    height}) => {
    return(
        <button>
            {text}
        </button>
    );
}

export default NeonButton;