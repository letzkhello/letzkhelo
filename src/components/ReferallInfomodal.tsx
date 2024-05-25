import React, { useEffect } from 'react';


interface ModalProps {
 show: boolean;
 onClose: () => void;
 children: React.ReactNode;
}


const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
 useEffect(() => {
   if (show) {
     document.body.style.overflow = 'hidden';
   } else {
     document.body.style.overflow = 'auto';
   }


   // Clean up on unmount
   return () => {
     document.body.style.overflow = 'auto';
   };
 }, [show]);


 if (!show) {
   return null;
 }


 return (
   <div className="modal-overlay">
     <div className="modal-content">
       <div className='py-4 mt-2 text-white flex items-center justify-around'>
       <button onClick={onClose} className="modal-close btn">
         Close
       </button>
       </div>
       {children}
     </div>
     <style jsx>{`
       .modal-overlay {
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         background: rgba(0, 0, 0, 0.5);
         display: flex;
         justify-content: center;
         align-items: center;
       }
       .modal-content {
         background: white;
         padding: 20px;
         border-radius: 5px;
         position: relative;
         width: 80%;
         max-width: 500px;
         height: 60%;
         max-height: 500px;
         overflow-y: auto;
       }
       .modal-close {
         position: absolute;
         top: 10px;
         right: 10px;
         background: none;
         border: none;
         font-size: 16px;
         cursor: pointer;
       }
       @media (max-width: 600px) {
         .modal-content {
           width: 90%;
           height: 70%;
         }
       }
     `}</style>
   </div>
 );
};


export default Modal;