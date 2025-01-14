import React from "react";
import MedicationFormComponent from "../book-form";
import { useToast } from "@/core/lib/toast/useToast";
import { BookFieldValue } from "../book-form.interface";
import { useBookUpdateMutation } from "@/store/features/protected/books/book.api";

export default function UpdateBookComponent({
  show,
  onClose,
  id,
  data,
}: {
  show: boolean;
  onClose: () => void;
  id?: string | number | null;
  data?: BookFieldValue;
}) {
  const showToast = useToast();
  const [bookUpdateMutation] = useBookUpdateMutation();
  const submitHandler = async (values: BookFieldValue) => {
    try {
      const formData = new FormData();
      if (values?.file) {
        formData.append("image", values?.file?.[0]?.originFileObj);
      }
      formData.append("title", values?.title);
      formData.append("id", values?.id);
      formData.append("authors", values?.authors);
      formData.append("isbn", values?.isbn);
      formData.append("isbn13", values?.isbn13);
      formData.append("language_code", values?.language_code);
      formData.append(
        "original_publication_year",
        values?.original_publication_year
      );
      formData.append("original_title", values?.original_title);
      const { data } = await bookUpdateMutation({
        data: formData,
        id,
      });
      if (data && (data?.statusCode === 200 || data?.statusCode === 201)) {
        showToast({
          type: "success",
          title: "Book detail updated successfully",
        });
        onClose();
      } else {
        showToast({ type: "error", title: "Book detail not updated" });
      }
    } catch (err) {
      showToast({ type: "error", title: "Book detail not updated" });
    }
  };
  return (
    <MedicationFormComponent
      status={"Update"}
      show={show}
      onClose={onClose}
      submitHandler={submitHandler}
      key="medication-update-component"
      formFields={data}
    />
  );
}
