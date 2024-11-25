"use client";

import { useStoreModel } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModel();
  return (
    <Modal
      title="Create Store"
      description="Add a new Store to manage products and catagories"
      isOpen={storeModal}
      OnClose={storeModal.onClose}
    >
      Future Create store form
    </Modal>
  );
};
