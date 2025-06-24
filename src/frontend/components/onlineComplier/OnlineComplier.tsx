import React from 'react';
import {
  CompilerContainer,
  CompilerTitle,
  IframeWrapper,
  CompilerIframe,
  BrandOverlay,
  RocketIcon
} from './OnlineComplierStyles';

const OnlineCompiler: React.FC = () => {
  return (
    <CompilerContainer>
      <CompilerTitle>Python Online Compiler</CompilerTitle>
      <IframeWrapper>
        <BrandOverlay>
          <RocketIcon>🚀</RocketIcon>
          TerminalX Engine
        </BrandOverlay>
        <CompilerIframe
          src="https://onecompiler.com/python"
          title="Python Online Compiler"
          allow="clipboard-read; clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </IframeWrapper>
    </CompilerContainer>
  );
};

export default OnlineCompiler;
