import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { default as skyseeLogo } from "/src/assets/skysee-7.png?format=webp"

interface Props {}

export const NotFound: React.FC<Props> = () => (
  <>
    <Helmet>
      <title>Page Not Found | SkySee Video</title>
      <meta
        name="description"
        content="Sorry, the page you're looking for doesn't exist. Return to SkySee Video's homepage."
      />
    </Helmet>

    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20">
      <div className="flex max-w-2xl flex-col items-center gap-8 text-center">
        {/* Logo */}
        <Link to="/" className="transition hover:opacity-80">
          <img
            src={skyseeLogo}
            alt="SkySee Video"
            className="h-20 w-auto md:h-24"
          />
        </Link>

        {/* 404 Message */}
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold text-blue-700 md:text-8xl">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">
            Sorry, we couldn't find the page you're looking for. The page may
            have been moved, deleted, or you may have entered an incorrect URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            to="/"
            className="rounded-md bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go to Homepage
          </Link>
          <Link
            to="/our-work"
            className="rounded-md border border-blue-700 px-6 py-3 text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Our Work
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
          <p>Need help? Contact us at:</p>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <a
              href="tel:678-304-9920"
              className="hover:text-blue-600 transition"
            >
              678-304-9920
            </a>
            <a
              href="mailto:info@skyseevideo.com"
              className="hover:text-blue-600 transition"
            >
              info@skyseevideo.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
)
