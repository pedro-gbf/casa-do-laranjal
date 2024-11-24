import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import ReactMarkdown from 'react-markdown';

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <Dialog.Title className="text-xl font-bold mb-4">{content?.title}</Dialog.Title>
        <div className="mt-4 prose prose-sm md:prose-base">
          <ReactMarkdown
            components={{
              // This ensures images are responsive
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  className="max-w-full h-auto rounded-lg my-4"
                  loading="lazy"
                />
              ),
              // This ensures links open in new tab
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                />
              ),
              // Add proper styling for headings
              h1: ({ node, ...props }) => (
                <h1 {...props} className="text-2xl font-bold mt-6 mb-4" />
              ),
              h2: ({ node, ...props }) => (
                <h2 {...props} className="text-xl font-bold mt-5 mb-3" />
              ),
              // Add proper styling for paragraphs
              p: ({ node, ...props }) => (
                <p {...props} className="my-4" />
              ),
              // Add proper styling for lists
              ul: ({ node, ...props }) => (
                <ul {...props} className="list-disc list-inside my-4" />
              ),
              ol: ({ node, ...props }) => (
                <ol {...props} className="list-decimal list-inside my-4" />
              ),
            }}
          >
            {content?.content || ''}
          </ReactMarkdown>
        </div>
        <Dialog.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          ×
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  );
};

export default Modal;