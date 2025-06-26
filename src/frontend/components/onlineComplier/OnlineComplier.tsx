import React from 'react';
import {
  CompilerContainer,
  CompilerTitle,
  IframeWrapper,
  CompilerIframe,
  BrandCover
} from './OnlineComplierStyles';

const OnlineCompiler: React.FC = () => {
  return (
    <CompilerContainer>
      <CompilerTitle>Python Online Compiler</CompilerTitle>
      <IframeWrapper>
        <BrandCover>
          <span>🌟 Premium Coding Environment 🌟</span>
        </BrandCover>
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
