const ConceptBanner = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      backgroundColor: '#1a1a2e',
      color: '#cbd5e1',
      fontSize: '0.7rem',
      textAlign: 'center',
      padding: '6px 16px',
      lineHeight: 1.4,
    }}
  >
    Concept site by{' '}
    <a href="https://www.easinilabs.com/" style={{ color: '#7dd3fc', textDecoration: 'underline' }}>
      easiniLABS
    </a>
    . This is a fictional business created to demonstrate our work.
  </div>
);

export default ConceptBanner;
