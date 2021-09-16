import React from "react";


import Document, { Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="shortcut icon"
            href="/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/favicon.ico"
          />
       
          
          {/* <script async defer src="https://www.googletagmanager.com/gtag/js?id=G-7D68J6S46J"></script> */}
          <script async defer dangerouslySetInnerHTML={{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-7D68J6S46J');
          `}}>
            
          </script>

          

        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
        
      </html>
    );
  }
}

export default MyDocument;
