// components/ZohoSalesIQ.jsx
"use client";

import Script from "next/script";

export default function ZohoSalesIQ() {
  return (
    <>
      <Script id="zoho-salesiq-init" strategy="beforeInteractive">
        {`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
      </Script>
      <Script
        id="zsiqscript"
        src="https://salesiq.zohopublic.com/widget?wc=siq26848ffe927b7afb2d38f1d9beaccdbc9c379ba224d272546ff4de4cd293a947"
        strategy="lazyOnload"
      />
    </>
  );
}
