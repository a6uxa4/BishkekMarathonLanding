import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ru"],
  defaultLocale: "ru",
});

export const config = {
  matcher: ["/", "/(ru|en)/:path*"],
};
