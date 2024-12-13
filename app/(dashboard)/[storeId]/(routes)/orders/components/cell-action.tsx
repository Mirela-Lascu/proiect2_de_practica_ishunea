"use client";

import { useState } from "react";
import { AlertModal } from "@/components/modals/alert-modal";
import { OrderColumn } from "./columns";

interface CellActionProps {
    data: OrderColumn;
    onDelete: (id: string) => void;
}

export const CellAction: React.FC<CellActionProps> = ({
    data,
    onDelete
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AlertModal 
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={() => onDelete(data.id)} loading={false}            />
            <button
                onClick={() => setOpen(true)}
                className="text-red-600 hover:text-red-800"
            >
                Delete
            </button>
        </>
    );
} 