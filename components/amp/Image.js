export const Image = () => (
  <>
    <div className='container'>
      <amp-img
        className='grey-placeholder'
        src='./rahulsingh.png'
        layout='responsive'
        width='100'
        height='100'
      ></amp-img>
    </div>
    <style amp-custom jsx>{`
      .container {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
      }
    `}</style>
  </>
);
