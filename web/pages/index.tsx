import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import LoadingAnimation from "../components/shared/loadingAnimation";
import MetaData from "../components/shared/metaData";
import HomePage from "../components/templates/home/homePage";
import { redirectIfLoggedIn } from "../lib/redirectIdLoggedIn";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const {} = props;
  const router = useRouter();

  const user = useUser();

  if (user) {
    router.push("/dashboard");
    return <LoadingAnimation title="Redirecting you to your dashboard..." />;
  }

  return (
    <MetaData title="Home">
      <HomePage />
    </MetaData>
  );
};

export default Home;

export const getServerSideProps = redirectIfLoggedIn("/dashboard", async () => {
  return {
    props: {},
  };
});
