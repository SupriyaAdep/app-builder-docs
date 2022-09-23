import React, { useCallback, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

function FullScreenButton({ code, className, forwardRef }) {

  const [isFullScreen, setIsFullScreen] = React.useState(false);


  const handleFullScreen = useCallback((e) => {
    const element = forwardRef.current;
    element.classList.toggle('fullscreen')
    setIsFullScreen(state => !state);

    // if (
    //   document.fullscreenElement ||
    //   document.webkitFullscreenElement ||
    //   document.mozFullScreenElement ||
    //   document.msFullscreenElement
    // ) {
    //   if (document.exitFullscreen) {
    //     document.exitFullscreen();
    //   } else if (document.mozCancelFullScreen) {
    //     document.mozCancelFullScreen();
    //   } else if (document.webkitExitFullscreen) {
    //     document.webkitExitFullscreen();
    //   } else if (document.msExitFullscreen) {
    //     document.msExitFullscreen();
    //   }
    // } else {

    //   if (element.requestFullscreen) {
    //     element.requestFullscreen();
    //   } else if (element.mozRequestFullScreen) {
    //     element.mozRequestFullScreen();
    //   } else if (element.webkitRequestFullscreen) {
    //     element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    //   } else if (element.msRequestFullscreen) {
    //     element.msRequestFullscreen();
    //   }
    // }
  }, [code]);


  return (
    <button
      type="button"
      aria-label={

        translate({
          id: 'theme.CodeBlock.expandButtonAriaLabel',
          message: 'Expand Code Block',
          description: 'The ARIA label for copy code blocks button',
        })
      }
      title={translate({
        id: 'theme.CodeBlock.expand',
        message: 'Expand',
        description: 'The expand button label on code blocks',
      })}
      className={clsx(
        'clean-btn',
        className,
        styles.copyButton,

      )}
      onClick={handleFullScreen}>
      <span className={styles.codeButtonIcons} aria-hidden="true">

        {/* <svg className={styles.copyButtonIcon} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M2.06863 9.91177H0.5V13.049C0.5 13.9118 1.20588 14.6176 2.06863 14.6176H5.20588V13.049H2.06863V9.91177ZM2.06863 2.06863H5.20588V0.5H2.06863C1.20588 0.5 0.5 1.20588 0.5 2.06863V5.20588H2.06863V2.06863ZM13.049 0.5H9.91177V2.06863H13.049V5.20588H14.6176V2.06863C14.6176 1.20588 13.9118 0.5 13.049 0.5ZM13.049 13.049H9.91177V14.6176H13.049C13.9118 14.6176 14.6176 13.9118 14.6176 13.049V9.91177H13.049V13.049Z" fill="white" />
        </svg> */}
        {isFullScreen ?
          (
            <svg className={styles.codeButtonIcon} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M13.1827 14.0834L4.66602 5.5667L3.21602 7.0167L6.26602 10.0667L5.33268 11L1.33268 7.00003L3.71602 4.6167L0.916016 1.8167L1.86602 0.866699L14.1327 13.1334L13.1827 14.0834ZM12.2827 9.38337L11.3327 8.43337L12.7827 6.98337L9.73268 3.93337L10.666 3.00003L14.666 7.00003L12.2827 9.38337Z" fill="white" />
            </svg>
          )
          :
          (
            <svg className={styles.codeButtonIcon} xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
              <path d="M4.6349 8.05L0.601562 4.01667L4.61823 0L5.65156 1.03333L2.6349 4.05L5.6349 7.05L4.6349 8.05ZM10.0182 8.06667L8.9849 7.03333L12.0016 4.01667L9.00156 1.01667L10.0016 0.0166667L14.0349 4.03333L10.0182 8.06667Z" fill="white" />
            </svg>
          )
        }

      </span>
    </button>
  );
}

export default FullScreenButton;
