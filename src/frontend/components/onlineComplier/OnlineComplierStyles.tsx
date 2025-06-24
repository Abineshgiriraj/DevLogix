import styled from 'styled-components';
import { COLORS } from '../../utils/Colors';

export const CompilerContainer = styled.div`
  width: calc(100% - 250px); // Account for sidebar width
  margin-left: 250px; // Push content to the right of sidebar
  height: calc(100vh - 64px);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%; // Full width on mobile
    margin-left: 0; // No margin on mobile since sidebar becomes bottom nav
  }
`;

export const CompilerTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${COLORS.Primary};
  padding-left: 0.5rem;
`;

export const IframeWrapper = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  min-height: 85vh;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #ffffff;
`;

export const CompilerIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`;

export const BrandOverlay = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, ${COLORS.Primary}, ${COLORS.Accent});
  padding: 6px 16px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: white;
  font-weight: 500;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const RocketIcon = styled.span`
  font-size: 1.1rem;
  animation: hover 2s infinite ease-in-out;

  @keyframes hover {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
`;

export const QuoteText = styled.span`
  font-style: italic;
  opacity: 0.9;
  text-align: center;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`; 