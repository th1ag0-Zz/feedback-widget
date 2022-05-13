import { useState } from 'react';
import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';

import { Loading } from '../../Loading';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export const ScreenshotButton: React.FC<ScreenshotButtonProps> = ({
  screenshot,
  onScreenshotTook,
}) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    try {
      const canvas = await html2canvas(document.querySelector('html')!);

      const base64img = canvas.toDataURL('image/png');

      onScreenshotTook(base64img);
    } catch (error) {
      console.log(error);
      alert('Erro ao printar tela');
    }

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type='button'
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100'
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 100,
        }}
      >
        <Trash weight='fill' />
      </button>
    );
  }

  return (
    <button
      type='button'
      className='p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors'
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  );
};
