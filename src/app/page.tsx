"use client"

import Image from "next/image";
import TextLogo from '@/app/assets/logo/textLogo.png';

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api?name=ditto');
      setData(response.data);
    } catch (error) {
      console.error('에러!!', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(data)

  return (
    <main>
      <Image
        src={TextLogo}
        alt='logo'
        width={326}
        height={156} />
      <p>게임 시작하기</p>
    </main>
  );
}
