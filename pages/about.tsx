import Link from "next/link";
import MainLayout from "@/components/layouts/MainLayout";
import DarkLayout from "./../components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <>
      <h1> About Page</h1>
      <h2>
        {" "}
        ir a <Link href="/">Home</Link>
      </h2>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: any) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
