"use client";
import { useStoreModel } from "@/hooks/use-store-modal";
import { useEffect } from "react";
export default function SetupPage() {
  const OnOpen = useStoreModel((state) => state.OnOpen);
  const isOpen = useStoreModel((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      OnOpen();
    }
  }, [isOpen, OnOpen]);
  return <>Root page</>;
}
