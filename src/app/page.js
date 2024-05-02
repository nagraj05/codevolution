import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-[50px] ">Welcome</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/login">Login</Link>
      <Link href="/product">Products</Link> 
      <Link href="/complexdashboard">Complex Dashboard</Link>
    </div>
  );
}
