import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { Dialog } from "@headlessui/react";

export default function Modal({ onClose = () => {}, children}) {
  let overlayRef = useRef();
  const { query } = useRouter();

  return (
    <div className="ml-16">
      <Dialog
        static
        open={true}
        onClose={onClose}
        initialFocus={overlayRef}
        className="fixed inset-0 z-10 flex items-center justify-center">

        <Dialog.Overlay
          ref={overlayRef}
          className="fixed inset-0 bg-gray-800/60" />

        <div>{children}</div>
      </Dialog>
    </div>
  )
}