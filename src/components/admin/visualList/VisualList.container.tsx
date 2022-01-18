import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  QueryVisualDataArgs,
  Query,
  QueryVisualDataConnectionArgs,
  Mutation,
  MutationDeleteVisualDatumArgs,
  MutationUpdateVisualDatumArgs,
} from "../../../commons/types/generated/types";
import VisualListPresenter from "./VisualList.presenter";
import {
  DELETE_VISUAL_DATUM,
  FETCH_VISUAL_COUNT,
  FETCH_VISUAL_DATA,
  UPDATE_VISUAL_DATUM,
} from "./VisualList.query";

const VisualListContainer = () => {
  //* 페이지 네이션 상태
  const [listInput, setListInput] = useState({
    start: 0,
    limit: 10,
  });

  //* 검색어
  const [search, setSearch] = useState<any>(undefined);

  //* 체크박스
  const [check, setCheck] = useState<any>([]);

  //* 변경할 데이터 ID
  const [dataId, setDataId] = useState("");

  //* 삭제 모달
  const [open, setOpen] = useState(false);
  const handleOpen = (e: any) => {
    setOpen(true);
    setDataId(e.target.id);
  };
  const handleClose = () => setOpen(false);

  //* 데이터 변경
  const [updateVisual] = useMutation<Mutation, MutationUpdateVisualDatumArgs>(
    UPDATE_VISUAL_DATUM
  );

  //* 데이터 삭제
  const [deleteVisual] = useMutation<Mutation, MutationDeleteVisualDatumArgs>(
    DELETE_VISUAL_DATUM
  );

  //* 데이터 불러오기
  const { data: visualList, refetch } = useQuery<Query, QueryVisualDataArgs>(
    FETCH_VISUAL_DATA,
    {
      variables: {
        start: listInput.start,
        limit: listInput.limit,
        where: {
          _or: [
            {
              title: search,
            },
          ],
        },
        sort: "created_at:desc",
      },
    }
  );

  //* 데이터 전체 길이
  const { data: visualCount, refetch: CountRefetch } = useQuery<
    Query,
    QueryVisualDataConnectionArgs
  >(FETCH_VISUAL_COUNT, {
    variables: {
      where: {
        _or: [
          {
            title: search,
          },
        ],
      },
    },
  });

  //* 검색어
  const handleSearch = (e: any) => {
    if (e.target.value === "") {
      setSearch(undefined);
    } else {
      setSearch(e.target.value);
    }
  };

  //* 체크박스 변경
  const handelCheck = (e: any) => {
    let newCheck = [...check];
    if (e.target.checked) {
      newCheck.push(e.target.value);
    } else {
      newCheck = newCheck.filter((data) => data !== e.target.value);
    }
    setCheck(newCheck);
  };

  //* 데이터 삭제
  const handleDeleteVisual = async () => {
    try {
      await Promise.all(
        check.map(async (data: any) => {
          return await deleteVisual({
            variables: {
              input: {
                where: {
                  id: String(data),
                },
              },
            },
          });
        })
      );
      refetch();
      CountRefetch();
      alert("데이터가 삭제 됐습니다.");
    } catch (e) {
      console.log(e);
    }
  };

  //*노출여부 변경
  const handleChangeShow = async (e: any) => {
    const isShow = e.target.value === "true" ? true : false;
    try {
      await updateVisual({
        variables: {
          input: {
            data: {
              isShow,
            },
            where: {
              id: dataId,
            },
          },
        },
      });
      handleClose();
      refetch();
    } catch (e) {
      console.log(e);
      handleClose();
    }
  };

  return (
    <VisualListPresenter
      visualList={visualList?.visualData}
      listInput={listInput}
      setListInput={setListInput}
      listLength={visualCount?.visualDataConnection?.aggregate?.count}
      handleSearch={handleSearch}
      handelCheck={handelCheck}
      handleDeleteVisual={handleDeleteVisual}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleChangeShow={handleChangeShow}
    />
  );
};

export default VisualListContainer;
