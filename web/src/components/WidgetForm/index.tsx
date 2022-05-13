import { useState } from 'react';

import {
  FeedbackContentStep,
  FeedbackSuccesStep,
  FeedbackTypeStep,
} from './Steps';

import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import thoughtImage from '../../assets/thought.svg';

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccesStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChangend={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

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
