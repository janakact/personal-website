export default function GoogleAnalytics() {
  return (<>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CDF5GWTFCX"></script>
        <script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CDF5GWTFCX');
        `}}>
        </script>
  </>
  )
}
