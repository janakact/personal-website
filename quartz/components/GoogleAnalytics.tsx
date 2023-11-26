export default function GoogleAnalytics() {
  return (<>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EN8E5269YV"></script>
        <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-EN8E5269YV');
        `}}>
        </script>
  </>
  )
}
