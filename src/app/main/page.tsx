"use client"

import Image from "next/image";
import Opening from '@/app/components/Opening';
import { useEffect, useState } from 'react';
import axios from "axios";
import Link from "next/link";
import StoreIcon from '@/app/assets/icon/store.svg';
import SettingIcon from '@/app/assets/icon/setting.svg';
import Metamong from '@/app/assets/charactor/waitMetamong.gif'
import './main.scss';

export default function Main() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('/api?name=ditto');
    //         setData(response.data);
    //     } catch (error) {
    //         console.error('에러!!', error)
    //     }
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    // console.log(data)

    return (
        <section id="main">
            <header>
                <div className="settingCont">
                    <SettingIcon className="settingIcon" />
                </div>
            </header>
            <div>
                {/* <span className="myLevel">LV.1</span>
                    <p className="myName">{data.name}</p> */}
            </div>
            <p className="hp"></p>

            <section className="centerContents">
                <div className="metamongImg">
                    <Image
                        src={Metamong}
                        alt='메타몽'
                        width={320}
                        height={260} />
                </div>
            </section>

            <nav>
                <ul className="navigation">
                    <li>
                        <Link href="/pokedex">
                            <StoreIcon />
                        </Link>
                    </li>
                    <li>
                        <Link href="/store">
                            <StoreIcon />
                        </Link>
                    </li>
                    <li>
                        <Link href="/trip">
                            <StoreIcon />
                        </Link>
                    </li>
                </ul>
            </nav>

        </section>
    );
}
