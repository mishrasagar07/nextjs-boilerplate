import whiteLogo from "@/assets/images/whiteLogo.svg";
import blackLogo from "@/assets/images/blackLogo.svg";
import { useRouter } from "next/router";
import Image from "next/image";

interface IType {
  type: string;
}

const Logo = ({ type }: IType) => {
  const router = useRouter();
  if (type == "white") {
    return (
      <div onClick={() => router.push("/")}>
        <Image src={whiteLogo} alt="City Tours" />
      </div>
    );
  } else {
    return (
      <div onClick={() => router.push("/")}>
        <Image src={blackLogo} alt="City Tours" />
      </div>
    );
  }
};

export default Logo;
