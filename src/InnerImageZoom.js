import React, { useRef } from 'react';

import PrismaZoom, { zoomIn } from 'react-prismazoom';

export function InnerImageZoom() {
  const prismaRef = useRef(null);

  const image = 'https://qbank.s3.sa-east-1.amazonaws.com/uploads/1595717107811.png';
  const zoomImage = 'https://qbank.s3.sa-east-1.amazonaws.com/uploads/1595717107811.png';

  return (
    <div>
      <button type="button" onClick={() => prismaRef.current.zoomIn(0.1)}>
        zoom in
      </button>

      <strong>{prismaRef.current.getZoom()}</strong>

      <button type="button" onClick={() => prismaRef.current.zoomOut(0.1)}>
        zoom out
      </button>

      <div style={{ marginBottom: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
        <PrismaZoom ref={prismaRef} scrollVelocity={1}>
          <img src={image} />
          <p>A text that can be zoomed and dragged</p>
        </PrismaZoom>
      </div>
    </div>
  );
}
