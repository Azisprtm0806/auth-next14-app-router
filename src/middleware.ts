import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAUth from "./middlewares/withAuth";

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();

  return res;
}

export default withAUth(mainMiddleware, [
  "/dashboard",
  "/profile",
  "/login",
  "/register",
]);

// export const config = {
//   matcher: ["/dashboard/:path*", "/about/:path*"],
// }
