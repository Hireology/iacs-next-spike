import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderStyles } from "./HeaderStyles";

/**
 * Header
 * Site-wide navigation
 * Maps through routes from API (with exceptions)
 */
export const Header = ({ routes }) => {
  const router = useRouter();
  const { organization } = router.query;

  // Hide certain routes from mapping
  const ROUTE_EXCEPTIONS = ["home"];

  return (
    <HeaderStyles>
      <h1>Next + Preact Spike</h1>
      <nav>
        {routes?.map((route, i) => {
          console.log(`${organization}/${route.name}`);
          return (
            !ROUTE_EXCEPTIONS.includes(route.name) && (
              <Link
                href={{
                  pathname: `/[organization]/${route.name}`,
                  query: { organization },
                }}
                key={i}
              >
                {route.name}
              </Link>
            )
          );
        })}
      </nav>
    </HeaderStyles>
  );
};
