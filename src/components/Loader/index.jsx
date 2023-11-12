{/* <div class="loadingio-spinner-ripple-7erbsyc7uw"><div class="ldio-qvkbsvl3iij">
<div></div><div></div>
</div></div>
<style type="text/css">
@keyframes ldio-qvkbsvl3iij {
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
}.ldio-qvkbsvl3iij div {
  position: absolute;
  border-width: 4px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  animation: ldio-qvkbsvl3iij 1s cubic-bezier(0,0.2,0.8,1) infinite;
}.ldio-qvkbsvl3iij div:nth-child(1) {
  border-color: #1b0629;
  animation-delay: 0s;
}
.ldio-qvkbsvl3iij div:nth-child(2) {
  border-color: #dc93f8;
  animation-delay: -0.5s;
}
.loadingio-spinner-ripple-7erbsyc7uw {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #f1f2f3;
}
.ldio-qvkbsvl3iij {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
// .ldio-qvkbsvl3iij div { box-sizing: content-box; } */}
{/* </style> */}

import styled, { keyframes } from 'styled-components';

const ripple = keyframes`
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background: rgba(140, 140, 140, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
`;

const Loader = styled.div`
  z-index: 9999;
  width: 200px;
  height: 200px;
  display: inline-block;
  position: relative;
  pointer-events: none;
`;

const Ripple = styled.div`
  position: absolute;
  border-width: 4px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  animation: ${ripple} 1s cubic-bezier(0,0.2,0.8,1) infinite;
`;

const Ripple1 = styled(Ripple)`
  border-color: #1b0629;
  animation-delay: 0s;
`;

const Ripple2 = styled(Ripple)`
  border-color: #dc93f8;
  animation-delay: -0.5s;
`;

export default function LoaderCSS() {
  return (
    <Container>
      <Loader>
        <Ripple1 />
        <Ripple2 />
      </Loader>
    </Container>
  );
}