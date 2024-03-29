import { Modal } from "antd";
import React from "react";
import { ChildrenType } from "@/core/interface/children.base";

export interface CusModalProps extends ChildrenType {
  show: boolean;
  onClose?: () => void;
  title?: string;
}

const AddEditPopup = ({ show, onClose, children, title }: CusModalProps) => {
  return (
    <Modal
      title={title}
      destroyOnClose
      open={show}
      footer={false}
      onCancel={onClose}
      width={760}
    >
      <div className="flex flex-col">{children}</div>
    </Modal>
  );
};

export default AddEditPopup;
