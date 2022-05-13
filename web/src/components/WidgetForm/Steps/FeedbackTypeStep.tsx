import { CloseButton } from '../../CloseButton';

import { FeedbackType, feedbackTypes } from '..';

interface FeedbackTypeStepProps {
  onFeedbackTypeChangend: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChangend,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className='bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 transition duration-200'
            onClick={() => onFeedbackTypeChangend(key as FeedbackType)}
          >
            <img src={value.image.src} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
