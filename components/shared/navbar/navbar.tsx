import Image from 'next/image'
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react'
import styles from './Navbar.module.css'

type Props = {
    state: number;
    setState: Dispatch<SetStateAction<string>> | null;
}

const Navbar = ({ state, setState = null }: Props) => {
    /**
     * States to keep track of which button is active
     */
    const [activeBtn, setActiveBtn] = useState(state)

    return (
        <nav className={ styles.mainNav }>
            <div>
                <a href='/#home'><Image src={'/favicon.ico'} alt={'Website Logo'} width={'40px'} height={'40px'} /></a>
            </div>
            <div className={ styles.btnSection }>
                <a href='/#advice'>
                    <button className={ `${styles.btn} ${activeBtn == 0 ? styles.active : null}` }
                        onClick={() => {
                            setActiveBtn(0);
                            if (setState) setState('recent')
                        }}>
                        Most Recent
                    </button>
                </a>
                <a href='/#advice'>
                    <button className={ `${styles.btn} ${activeBtn == 1 ? styles.active : null}` }
                        onClick={() => {
                            setActiveBtn(1); 
                            if (setState) setState('popular')
                        }}>
                        Most Popular
                    </button>
                </a>
                <a href='/#advice'>
                    <button className={ `${styles.btn} ${activeBtn == 2 ? styles.active : null}` }
                        onClick={() => {
                            setActiveBtn(2); 
                            if (setState) setState('views')
                        }}>
                        Most Views
                    </button>
                </a>
                <Link href='/addRecord'>
                    <button className={ `${styles.addBtn}` } onClick={() => setActiveBtn(3)}>
                        Add Your Advice!
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar