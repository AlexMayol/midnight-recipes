type Props = {
  image?: string;
  title?: string;
  description?: string;
  url?: string;
};
const TwitterMetas = ({ description, image }: Props) => {
  return (
    <>
      <meta name="twitter:creator" content={process.env.SITE_NAME} />
      <meta name="twitter:site" content={process.env.SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};
const FacebookMetas = ({ title, description, image, url }: Props) => {
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content={url?.includes("recipe") ? "article" : "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={process.env.SITE_NAME} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content="937" />
      <meta property="og:image:height" content="624" />
    </>
  );
};

export const Metadata = (props: Props) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Midnight cook" />
      <meta name="start_url" content="/" />
      <meta name="application-name" content="PWA App" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="PWA App" />
      <meta name="description" content="Best PWA App in the world" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
      <TwitterMetas {...props} />
      <FacebookMetas {...props} />
    </>
  );
};
