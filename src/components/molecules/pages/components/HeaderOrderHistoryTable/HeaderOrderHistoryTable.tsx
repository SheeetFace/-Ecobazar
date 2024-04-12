import styles from '../HeaderOrderHistoryTable/HeaderOrderHistoryTable.module.scss';

const HeaderOrderHistoryTable:React.FC = () => {

    return (
        <tr className={styles.HeaderOrderHistoryTable}>
            <td>ORDER ID</td>
            <td>DATE</td>
            <td>TOTAL</td>
            <td>STATUS</td>
            <td></td>
        </tr>
    )
}

export default HeaderOrderHistoryTable;