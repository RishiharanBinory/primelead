const CookiePage = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] max-h-[860px] bg-white">
      {/* Header */}
      <div className="px-10 pt-16 pb-0 max-w-300 mx-auto">
        <h1 className="text-5xl font-bold text-black mb-6">Cookie Policy</h1>
      </div>

      {/* Full-width divider */}
      <hr className="border-t border-gray-200 w-full" />

      {/* Body Content */}
      <div className="px-10 pt-10 pb-20 max-w-300 mx-auto">
        {/* Dates */}
        <p className="text-[18px] text-gray-700 mb-3">
          Effective Date: 26-Jul-2023
        </p>
        <p className="text-[18px] text-gray-700 mb-10">
          Last Updated: 26-Jul-2023
        </p>

        {/* What are cookies? */}
        <section className="mb-10">
          <h2 className="text-[24px] font-bold text-black mb-3">
            What are cookies?
          </h2>
          <p className="text-[18px] text-gray-800 leading-relaxed mb-4">
            This Cookie Policy explains what cookies are and how we use them,
            the types of cookies we use i.e, the information we collect using
            cookies and how that information is used, and how to manage the
            cookie settings.
          </p>
          <p className="text-[18px] text-gray-800 leading-relaxed">
            Cookies are small text files that are used to store small pieces of
            information. They are stored on your device when the website is
            loaded on your browser. These cookies help us make the website
            function properly, make it more secure, provide better user
            experience, and understand how the website performs and to analyze
            what works and where it needs improvement.
          </p>
        </section>

        {/* How do we use cookies? */}
        <section className="mb-10">
          <h2 className="text-[24px] font-bold text-black mb-3">
            How do we use cookies?
          </h2>
          <p className="text-[18px] text-gray-800 leading-relaxed mb-4">
            As most of the online services, our website uses first-party and
            third-party cookies for several purposes. First-party cookies are
            mostly necessary for the website to function the right way, and they
            do not collect any of your personally identifiable data.
          </p>
          <p className="text-[18px] text-gray-800 leading-relaxed">
            The third-party cookies used on our website are mainly for
            understanding how the website performs, how you interact with our
            website, keeping our services secure, providing advertisements that
            are relevant to you, and all in all providing you with a better and
            improved user experience and help speed up your future interactions
            with our website.
          </p>
        </section>

        {/* Types of Cookies we use */}
        <section className="mb-10">
          <h2 className="text-[24px] font-bold text-black mb-4">
            Types of Cookies we use
          </h2>
          {/* 
            This section intentionally left empty to match the live site.
            In production, a third-party cookie consent widget (e.g. CookieYes)
            injects a cookie table here dynamically.
          */}
        </section>

        {/* Manage cookie preferences */}
        <section className="mb-10">
          <h2 className="text-[24px] font-bold text-black mb-3">
            Manage cookie preferences
          </h2>

          {/* Cookie Settings — teal link, not a button */}
          <a
            href="#cookie-settings"
            className="text-teal-500 text-[18px] font-medium hover:underline block mb-4"
          >
            Cookie Settings
          </a>

          <p className="text-[18px] text-gray-800 leading-relaxed mb-4">
            You can change your cookie preferences any time by clicking the
            above button. This will let you revisit the cookie consent banner
            and change your preferences or withdraw your consent right away.
          </p>

          <p className="text-[18px] text-gray-800 leading-relaxed mb-6">
            In addition to this, different browsers provide different methods to
            block and delete cookies used by websites. You can change the
            settings of your browser to block/delete the cookies. Listed below
            are the links to the support documents on how to manage and delete
            cookies from the major web browsers.
          </p>

          {/* Browser links — inline text + teal hyperlink */}
          <p className="text-[18px] text-gray-800 mb-3">
            Chrome:{" "}
            <a
              href="https://support.google.com/accounts/answer/32050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline break-all"
            >
              https://support.google.com/accounts/answer/32050
            </a>
          </p>

          <p className="text-[18px] text-gray-800 mb-3">
            Safari:{" "}
            <a
              href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline break-all"
            >
              https://support.apple.com/en-in/guide/safari/sfri11471/mac
            </a>
          </p>

          <p className="text-[18px] text-gray-800 mb-3">
            Firefox:{" "}
            <a
              href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline break-all"
            >
              https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
            </a>
          </p>

          <p className="text-[18px] text-gray-800 mb-6">
            Internet Explorer:{" "}
            <a
              href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline break-all"
            >
              https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
            </a>
          </p>

          <p className="text-[18px] text-gray-800">
            If you are using any other web browser, please visit your browser&apos;s
            official support documents.
          </p>
        </section>
      </div>
    </main>
  );
};

export default CookiePage;
