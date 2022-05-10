import styles from './Element.module.css'

class Record {
    rank: string;
    title: string;
    description: string;

    constructor(rank: string, title: string, desp: string) {
        this.rank = rank
        this.title = title
        this.description = desp
    }

    getRank() : string {
        return this.rank
    }

    getTitle() : string {
        return this.title
    }

    getDesp() : string {
        return this.description
    }
}

type Props = {
    rank: string,
    title: string,
    desp: string
}

const Element = ({ rank, title, desp }: Props) => {
    const elem = new Record(rank, title, desp)
    return (
        <div className={styles.chartContent}>
            <div className={styles.col1}>{ elem.getRank() }</div>
            <div className={styles.col2}>{ elem.getTitle() }</div>
            <div className={styles.col3}>{ elem.getDesp() }</div>
        </div>
    )
}

export default Element