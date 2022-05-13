import React from 'react';

import { IProfile } from '../../../store/reducers/profileReducer';
import { ITeam } from '../../../store/reducers/teamsReducer';
import NeonButton from '../buttons/neon/NeonButton';

import styles from './table.module.scss';

interface ITableProp {
  isTeamsTable: boolean;
  tableData: IProfile[] | ITeam[];
}

const Table = ({isTeamsTable, tableData}: ITableProp) => {
  return (
    <section className={styles.top}>
      <div className={styles.tableWrapper}>
        <div className={styles.caption}>{isTeamsTable ? 'Топ 10 команд' : 'Топ 10 игроков'}</div>
        {
          tableData.length ?
            <table className={styles.table}>
            <thead className={styles.head}>
                <tr style={{width: '100%'}}>
                  <th className={styles.cell}>{isTeamsTable ? 'Название' : 'Ник'}</th>
                  <th className={styles.cell}>{isTeamsTable ? 'Победы/Поражения' : 'Рейтинг'}</th>
                  <th className={styles.cell}>{isTeamsTable ? 'Капитан' : 'Игра'}</th>
                  <th className={styles.cell}>Ссылка</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item: any) => (
                  <tr className={styles.row} key={item.id}>
                    <td className={styles.cell}>{isTeamsTable ? item.title : item.nickname}</td>
                    <td className={styles.cell}>{isTeamsTable ? `${item.win}/${item.lose}` : item.rating}</td>
                    <td className={styles.cell}>{isTeamsTable ? item.captain.nickname : item.game.title}</td>
                    <td className={styles.cell}>
                      <NeonButton
                        to={isTeamsTable ? `/team/${item.id}` : `/profile/${item.id}`}
                        color={'default'}
                        is_neon={false}
                        text={'Перейти'}
                        width={'100%'}
                        height={'100%'}
                        profileId={item.id}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
          : <h1 style={{color: 'white'}}>Данных нет</h1>
        }
      </div>
    </section>
  );
}

export default Table;