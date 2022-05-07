import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

import { WidgetForm } from '../WidgetForm';

export const Widget: React.FC = () => {
  return (
    <Popover className='absolute bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-end'>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className='bg-brand-500 rounded-full p-3 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6 ' />

        <span className='max-w-0 overflow-hidden group-hover:max-w-sm transition-all duration-500 ease-linear font-medium'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};
