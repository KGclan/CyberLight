import Snackbar from 'node-snackbar';

import styles from './snackbar.module.scss';

const snackbar = (text: string) => {
    Snackbar.show(
        {
            text,
            width: '500px',
            customClass: styles.snackbar,
            showAction: false,
            backgroundColor: '#3F2D71'
        }
    );
};

export default snackbar;