"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Pagination, Image as PreviewImage } from "antd";
import { PrimaryButton } from "@/components/common/button/Button";
import { PaginationValue } from "@/core/hoc/withPagination";

import CusTable from "@/components/common/table/Table";
import AddMeditation from "./component/create-update-book/add-book/add-book";
import UpdateMedicationComponent from "./component/create-update-book/update-book/update-book";
import DeleteConfirmationPopup from "@/components/common/modal/DeleteConfirmationPopup";
import { useToast } from "@/core/lib/toast/useToast";
import { BookFieldValue } from "./component/create-update-book/book-form.interface";
import {
  useBookDeleteMutation,
  useGetAllBooksQuery,
} from "@/store/features/protected/books/book.api";

const BookComponent = () => {
  const showToast = useToast();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLimitCount, setPageLimitCount] = useState<number>(10);
  const [modal, setModal] = useState<boolean>(false);
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [itemId, setItemId] = useState<string | number | null>(null);
  const [rowData, setRowData] = useState<BookFieldValue | null>();
  const [deleteBookApiMutation] = useBookDeleteMutation();
  const { data, isLoading, refetch } = useGetAllBooksQuery({
    page: currentPage?.toString(),
    limit: pageLimitCount?.toString(),
  });
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    refetch();
  };

  const handlePageSizeChange = (_: number, count: number) => {
    setPageLimitCount(count);
    refetch();
  };
  const sampleColumns = [
    {
      title: "SN",
      dataIndex: "index",
      key: "index",
      width: 70,
    },
    {
      title: "Books Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      key: "image_url",
      width: 160,
      render: (data: BookFieldValue) => (
        <div>
          <PreviewImage
            src={
              data?.image_url !== "undefined"
                ? data?.image_url
                : "/images/magnetic-tape.webp"
            }
            width={100}
            height={100}
            alt={"Chapter Image"}
          />
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 160,
      render: (data: BookFieldValue) => (
        <div className="flex flex-row gap-2 items-center ">
          <Image
            src={"/icons/edit.svg"}
            className="cursor-pointer"
            alt="edit-icon"
            width={20}
            height={20}
            onClick={() => {
              setUpdateModal(true);
              setItemId(data?.id!);
              setRowData(data);
            }}
          />
          <Image
            src={"/icons/delete.svg"}
            alt="delete-icon"
            className="cursor-pointer"
            width={20}
            height={20}
            onClick={() => {
              setDeleteModal(true);
              setItemId(data?.id!);
            }}
          />
        </div>
      ),
    },
  ];
  const deleteMeditationHandler = async () => {
    const data = await deleteBookApiMutation({ id: itemId });
    if (data?.data?.statusCode === 200) {
      setDeleteModal(false);
      setItemId(null);
      showToast({
        type: "success",
        title: "Book deleted successfully",
      });
    } else {
      showToast({
        type: "error",
        title: "Error occured while deleting book",
      });
    }
  };
  const addHandler = () => {
    setItemId(null);
    setRowData(null);
    setModal(true);
  };
  return (
    <div className="p-[20px]">
      <div className="flex justify-between items-center mb-3 items-center">
        <p className="font-semibold text-[25px]">Books</p>
        <AddMeditation show={modal} onClose={() => setModal(false)} />
        {itemId !== null && (
          <UpdateMedicationComponent
            show={updateModal}
            onClose={() => setUpdateModal(false)}
            id={itemId}
            data={rowData!}
          />
        )}
        <DeleteConfirmationPopup
          show={deleteModal}
          onClose={() => setDeleteModal(false)}
          handleDeleteFunc={deleteMeditationHandler}
        />
        <div className="flex gap-2 items-center">
          <PrimaryButton type="button" onClick={addHandler}>
            {" "}
            Add Book
          </PrimaryButton>
        </div>
      </div>
      <CusTable
        columns={sampleColumns}
        dataSource={data?.data
          ?.slice()
          ?.sort((a: { id: number }, b: { id: number }) => a?.id - b?.id)
          ?.map((p: BookFieldValue, index: number) => {
            return {
              ...p,
              authors: p?.authors || p?.author,
            };
          })}
        loading={isLoading}
        bordered={true}
        sticky={true}
      />
      <div className="mt-4 mx-auto w-max">
        <Pagination
          total={data?.totalCount}
          defaultCurrent={1}
          onShowSizeChange={handlePageSizeChange}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default BookComponent;
