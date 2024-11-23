import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg max-w-md w-full">
          <Dialog.Title className="text-xl font-bold mb-4">{content?.title}</Dialog.Title>
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: content?.body }} />
          <Dialog.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            ×
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;