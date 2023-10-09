import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";

const PricingPage = () => {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h2>
        {" "}
        ir a <Link href="/">Home</Link>
      </h2>
    </MainLayout>
  );
};

export default PricingPage;
