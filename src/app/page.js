import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2>Welcome</h2>
      Hello, Web!
      <br></br>
      <img src="/IMG_20211104_223436_062.jpg"></img>
    </div>
  );
}
