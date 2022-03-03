import React from 'react';
import NeonButton from '../buttons/neon/NeonButton';

import styles from './table.module.scss';

interface ITableProp {
  tableName: string;
}

const Table = ({tableName}: ITableProp) => {

  return (
    <section className={styles.top}>
      <div className={styles.tableWrapper}>
        <div className={styles.caption}>{tableName}</div>
        <table className={styles.table}>
          <thead className={styles.head}>
              <tr style={{width: '100%'}}>
                <th className={styles.cell}>Название</th>
                <th className={styles.cell}>Победы/Поражения</th>
                <th className={styles.cell}>Капитан</th>
                <th className={styles.cell}>Ссылка</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.row}>
                <td className={styles.cell}>Sith</td>
                <td className={styles.cell}>10/5</td>
                <td className={styles.cell}>DartWayder</td>
                <td className={styles.cell}>
                  <NeonButton
                    color={'default'}
                    is_neon={false}
                    text={'Перейти'}
                    width={'100%'}
                    height={'100%'}
                  />
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.cell}>Sith</td>
                <td className={styles.cell}>10/5</td>
                <td className={styles.cell}>DartWayder</td>
                <td className={styles.cell}>
                  <NeonButton
                    color={'default'}
                    is_neon={false}
                    text={'Перейти'}
                    width={'100%'}
                    height={'100%'}
                  />
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.cell}>Sith</td>
                <td className={styles.cell}>10/5</td>
                <td className={styles.cell}>DartWayder</td>
                <td className={styles.cell}>
                  <NeonButton
                    color={'default'}
                    is_neon={false}
                    text={'Перейти'}
                    width={'100%'}
                    height={'100%'}
                  />
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.cell}>Sith</td>
                <td className={styles.cell}>10/5</td>
                <td className={styles.cell}>DartWayder</td>
                <td className={styles.cell}>
                  <NeonButton
                    color={'default'}
                    is_neon={false}
                    text={'Перейти'}
                    width={'100%'}
                    height={'100%'}
                  />
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={styles.cell}>Sith</td>
                <td className={styles.cell}>10/5</td>
                <td className={styles.cell}>DartWayder</td>
                <td className={styles.cell}>
                  <NeonButton
                    color={'default'}
                    is_neon={false}
                    text={'Перейти'}
                    width={'100%'}
                    height={'100%'}
                  />
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;