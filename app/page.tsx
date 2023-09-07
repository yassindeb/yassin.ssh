import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-row justify-center align-center">
      <div>
        <Image
          className="hidden dark:block"
          src="/logoDark.png"
          alt="dark-mode-image"
          width={500}
          height={500}
        />
        <Image
          className="mb-4 block dark:hidden"
          src="/logoWhite.png"
          alt="light-mode-image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
