"use client"

import Image from "next/image";
import TextLogo from '@/app/assets/logo/textLogo2.png';
import { useRouter } from 'next/navigation';
import './opening.scss';

export default function Opening() {

    const router = useRouter();

    const pressStart = () => {
        console.log('시자아아악')
        router.push('/main');
    }

    return (
        <section id="opening" onClick={pressStart} >
            <Image
                src={TextLogo}
                alt='logo'
                width={280}
                height={230}
                priority
            //*priority : 이미지가 화면 상단에 표시되는 경우 렌더링 우선순위를 설정
            />
            <p>게임 시작하기</p>
        </section>
    );
}
