import { create } from 'zustand';

interface CheckoutModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCheckoutModal = create<CheckoutModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCheckoutModal;
