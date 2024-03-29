"use client";
import React, { useEffect } from "react";
import { PaginationValue, withPagination } from "@/core/hoc/withPagination";

import CusTable from "@/components/common/table/Table";
import { useGetAllUserQuery } from "@/store/features/protected/user/user.api";

type Props = {
  value: PaginationValue;
};
const UserComponent = ({ value }: Props) => {
  const { paginationMeta, setPaginationMeta } = value;
  const { data, isLoading } = useGetAllUserQuery({
    refetchOnMountOrArgChange: true,
    page: paginationMeta.page ?? 1,
    limit: paginationMeta.limit,
  });
  useEffect(() => {
    let meditationData = data;
    if (meditationData) {
      setPaginationMeta({
        total_pages: meditationData.totalPages,
        page: meditationData?.page,
      });
    }
  }, [data, setPaginationMeta]);

  const sampleColumns = [
    {
      title: "SN",
      dataIndex: "index",
      key: "index",
      width: 70,
    },
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <div className="p-[20px]">
      <div className="flex justify-between items-center mb-3 items-center">
        <p className="font-semibold text-[25px]">Users</p>
      </div>
      <CusTable
        columns={sampleColumns}
        dataSource={data?.data
          ?.slice()
          ?.sort((a: { id: number }, b: { id: number }) => a?.id - b?.id)
          ?.map((p: any, index: number) => {
            return {
              id: p?.id,
              username: p?.username,
              email: p?.email,
              index: index + 1,
            };
          })}
        loading={isLoading}
        bordered={true}
        sticky={true}
      />
    </div>
  );
};
export default withPagination(UserComponent);
