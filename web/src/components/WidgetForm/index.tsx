import { CloseButton } from '../CloseButton';

import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import thoughtImage from '../../assets/thought.svg';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      src: bugImage,
      alt: 'inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      src: ideaImage,
      alt: 'lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      src: thoughtImage,
      alt: 'nuvem',
    },
  },
};

export const WidgetForm: React.FC = () => {
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span>Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className='bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500'
          >
            <img src={value.image.src} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>

      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela{' '}
        <a
          href='https://rocketseat.com.br'
          className='underline underline-offset-1'
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
