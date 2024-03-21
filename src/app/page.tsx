import Image from "next/image";
import TextLogo from '@/app/assets/logo/textLogo.png';

export default function Home() {
  return (
    <main>
      <Image
      src={TextLogo}
      alt='logo'
      width={326} 
      height={156}/>
      <p>게임 시작하기</p>
    </main>
  );
}
